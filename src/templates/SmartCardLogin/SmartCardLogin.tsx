import { useState, type ReactNode } from "react";
import styles from "./SmartCardLogin.module.css";
import { TextField } from "../../components/TextField/TextField";
import { Form } from "../../components/Form/Form";
import { Button } from "../../components/Button/Button";
import { AuthShell } from "../AuthShell/AuthShell";

export interface SCCredentials {
  scpin: string;
}

interface SmartCardLoginProps {
  productIcon?: ReactNode;
  productTitle: string;
  productSubtitle?: string;
  onSubmit: (credentials: SCCredentials) => void;
  onCancel: () => void;
  linksArray?: {
    label: string;
    href: string;
  }[];
  miscellaneousMsg?: string;
}

export function SmartCardLoginPage({
  productIcon,
  productTitle,
  productSubtitle,
  onSubmit,
  onCancel,
  linksArray,
  miscellaneousMsg,
}: SmartCardLoginProps) {
  // state
  const [smartCardpin, setSmartCardpin] = useState("");
  const handleSubmit = () => {
    onSubmit({ scpin: smartCardpin });
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
          label="Smart Card Pin: "
          placeholder="Enter Smart card pin"
          value={smartCardpin}
          onChange={(e) => setSmartCardpin(e.target.value)}
        />
        <div className={styles.buttons}>
          <div className={styles.loginBtn}>
            <Button label="Log in" variant="primary" type="submit" />
          </div>
          <div className={styles.cancelBtn}>
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
