import type { ReactNode } from "react";
import companyLogo from "../../assets/logoipsum-288.png";
import styles from "./AuthShell.module.css";

interface AuthShellProps {
  productIcon?: ReactNode;
  productTitle: string;
  productSubtitle?: string;
  linksArray?: {
    label: string;
    href: string;
  }[];
  miscellaneousMsg?: string;
  children: ReactNode;
}

export function AuthShell({
  productIcon,
  productTitle,
  productSubtitle,
  linksArray,
  miscellaneousMsg,
  children,
}: AuthShellProps) {
  return (
    <div className={styles.authShell}>
      <div className={styles.upperSection}>
        {productIcon && <div className={styles.productIcon}>{productIcon}</div>}
        <h1 className={styles.title}>{productTitle}</h1>
        <div className={styles.logoContainer}>
          <img
            className={styles.companyLogo}
            src={companyLogo}
            alt="your company logo"
          />
        </div>
        {productSubtitle && (
          <p className={styles.subtitle}>{productSubtitle}</p>
        )}
      </div>

      <div className={styles.inputArea}>{children}</div>

      {linksArray && linksArray.length > 0 && (
        <nav className={styles.links} aria-label="Helpful links">
          {linksArray.map((link, index) => (
            <span key={link.href}>
              {index > 0 && <span className={styles.separator}>|</span>}
              <a
                className={styles.link}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      )}
      {miscellaneousMsg && (
        <div className={styles.miscellaneous}>{miscellaneousMsg}</div>
      )}
    </div>
  );
}
