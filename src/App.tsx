import { Card } from "./components/Card/Card";

function App() {
  const jobs = [
    { type: "Pending", count: 0 },
    { type: "In Progress", count: 5 },
    { type: "Finished", count: 15 },
  ];

  return (
    <div>
      <Card title="System Information" footer="View All">
        <div>
          {jobs.map((job) => (
            <div className="job-section">
              <div className="job-header">
                <h3>
                  {job.type}: {job.count}
                </h3>
              </div>
              <div className="job-content">
                {job.count === 0 && <p>No {job.type} jobs </p>}
                {job.count > 0 && (
                  <p>
                    {job.count} {job.type} jobs{" "}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default App;
