import { useState, useMemo } from "react";
import styles from "./Datagrid.module.css";

// drives the "Rows per page" dropdown options below
const PAGE_SIZE_OPTIONS = [10, 25, 50];

export interface DatagridCol<T> {
  field: keyof T & string;
  headerName: string;
}

// T must have an `id` since it's used as the React key for table rows
interface DatagridProps<T extends { id: string | number }> {
  columns: DatagridCol<T>[];
  rows: T[];
  pageSize?: number;
}

export function DataGrid<T extends { id: string | number }>({
  columns,
  rows,
  // renamed: pageSize is now local state below, this prop only seeds it
  pageSize: initialPageSize = 10,
}: DatagridProps<T>) {
  // 1. Manage State for Sorting and Pagination
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    // reset to page 1 - otherwise currentPage could point past the new totalPages
    setCurrentPage(1);
  };

  // 2. Handle Column Header Clicks for Sorting
  const requestSort = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // 3. Process the Data (Sort then Paginate)
  const processedRows = useMemo(() => {
    let sortedRows = [...rows];

    // Apply sorting if a column is selected
    // copied to a local const so TS can narrow it to non-null inside the closure below
    const sortKey = sortConfig.key;
    if (sortKey !== null) {
      sortedRows.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    // Calculate pagination slices
    const startIndex = (currentPage - 1) * pageSize;
    return sortedRows.slice(startIndex, startIndex + pageSize);
  }, [rows, sortConfig, currentPage, pageSize]);

  // 4. Calculate total pages
  const totalPages = Math.ceil(rows.length / pageSize);

  return (
    <div>
      <div className={styles.dgContainer}>
        {/* HTML Table Layout */}
        <table className={styles.dg}>
          <thead>
            <tr className={styles.dgHeader}>
              {columns.map((col) => (
                <th
                  key={col.field}
                  onClick={() => requestSort(col.field)}
                  className={styles.dgHeaderCell}
                >
                  {col.headerName}
                  {/* Visual Arrow Indicators for Sorting */}
                  {sortConfig.key === col.field
                    ? sortConfig.direction === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {processedRows.map((row) => (
              <tr key={row.id} className={styles.dgBodyRow}>
                {columns.map((col) => (
                  <td key={col.field} className={styles.dgBodyRowCell}>
                    {/* cast to string: field values are typed as T[keyof T], not guaranteed a ReactNode */}
                    {String(row[col.field])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className={styles.dgPagination}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.dgPageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <label className={styles.dgPageSize}>
          Rows per page:
          <select
            className={styles.dgPageSizeSelect}
            value={pageSize}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
