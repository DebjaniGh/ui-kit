import { useState, type ReactNode } from "react";
import styles from "./RSALoginPage.module.css";
import { TextField } from "../../components/TextField/TextField";
import { Form } from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";
import { AuthShell } from "../AuthShell/AuthShell";

export interface RSACredentials {
  passcode: string;
}

interface RSALoginProps {
  productIcon?: ReactNode;
  productTitle: string;
  productSubtitle?: string;
  onSubmit: (credentials: RSACredentials) => void;
  linksArray?: {
    label: string;
    href: string;
  }[];
  miscellaneousMsg?: string;
}

export function RSALoginPage({
  productIcon,
  productTitle,
  productSubtitle,
  onSubmit,
  linksArray,
  miscellaneousMsg,
}: RSALoginProps) {
  // state
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
            <Button label="Cancel" variant="secondary" type="button" />
          </div>
        </div>
      </Form>
    </AuthShell>
  );
}
