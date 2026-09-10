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

/**
 * Shared chrome for every login screen: product heading, company logo, then
 * helper links and a footer message.
 *
 * The three login templates differ only in which credential fields they show,
 * so that part is passed in as `children` and everything around it lives here
 * once. Add anything common to all login screens to this file, not to the
 * individual templates.
 */
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

      {/* Whatever credential form the specific login template supplies. */}
      <div className={styles.inputArea}>{children}</div>

      {linksArray && linksArray.length > 0 && (
        // aria-label distinguishes this nav from any other on the page.
        <nav className={styles.links} aria-label="Helpful links">
          {linksArray.map((link, index) => (
            <span key={link.href}>
              {/* Separator before every link but the first, so the row reads
                  "A | B | C" with no trailing pipe. */}
              {index > 0 && <span className={styles.separator}>|</span>}
              {/* Opens in a new tab so a part-filled login form is not lost;
                  rel="noreferrer" is the required guard for target="_blank". */}
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
