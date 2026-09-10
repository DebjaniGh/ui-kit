import { useState, type ReactNode } from "react";
import styles from "./RSALoginPage.module.css";
import { TextField } from "../../components/TextField/TextField";
import { Form } from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";
import { AuthShell } from "../AuthShell/AuthShell";

/** What onSubmit hands back: the combined PIN + token code the user typed. */
export interface RSACredentials {
  passcode: string;
}

interface RSALoginProps {
  productIcon?: ReactNode;
  productTitle: string;
  productSubtitle?: string;
  onSubmit: (credentials: RSACredentials) => void;
  onCancel: () => void;
  linksArray?: {
    label: string;
    href: string;
  }[];
  miscellaneousMsg?: string;
}

/**
 * RSA SecurID login screen: a single passcode field plus Log in / Cancel.
 *
 * Same AuthShell chrome as LoginPage, differing only in the credential it
 * collects. `onCancel` is required because there is no sensible default for
 * where cancelling should lead.
 */
export function RSALoginPage({
  productIcon,
  productTitle,
  productSubtitle,
  onSubmit,
  onCancel,
  linksArray,
  miscellaneousMsg,
}: RSALoginProps) {
  // state
  // Passcode stays local and leaves only through onSubmit.
  const [rsaPasscode, setRsaPasscode] = useState("");
  const handleSubmit = () => {
    onSubmit({ passcode: rsaPasscode });
  };

  // JSX
  return (
    <AuthShell
      productIcon={productIcon}
      productTitle={productTitle}
      productSubtitle={productSubtitle}
      linksArray={linksArray}
      miscellaneousMsg={miscellaneousMsg}
    >
      <Form onSubmit={handleSubmit}>
        {/* type="password" masks the passcode as it is typed. */}
        <TextField
          type="password"
          label="RSA Passcode: "
          value={rsaPasscode}
          onChange={(e) => setRsaPasscode(e.target.value)}
        />
        <div className={styles.buttons}>
          <div className={styles.loginBtn}>
            <Button label="Log in" variant="primary" type="submit" />
          </div>
          <div className={styles.cancelBtn}>
            {/* type="button" keeps Cancel from submitting the form. */}
            <Button
              label="Cancel"
              variant="secondary"
              type="button"
              onClick={onCancel}
            />
          </div>
        </div>
      </Form>
    </AuthShell>
  );
}
