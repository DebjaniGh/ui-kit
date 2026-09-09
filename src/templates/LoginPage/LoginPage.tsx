import { useState, type ReactNode } from "react";

import styles from "./LoginPage.module.css";
import { Form } from "../../components/Form/Form";
import { TextField } from "../../components/TextField/TextField";
import { Button } from "../../components/Button/Button";
import { SelectField } from "../../components/Select/SelectField";
import { AuthShell } from "../AuthShell/AuthShell";

export interface Credentials {
  username: string;
  password: string;
  domain?: string;
}

interface LoginPageProps {
  productIcon?: ReactNode;
  productTitle: string;
  productSubtitle?: string;
  domainOptions?: {
    label: string;
    value: string;
  }[];
  onSubmit: (credentials: Credentials) => void;
  linksArray?: {
    label: string;
    href: string;
  }[];
  miscellaneousMsg?: string;
}

export function LoginPage({
  productIcon,
  productTitle,
  productSubtitle,
  domainOptions,
  onSubmit,
  linksArray,
  miscellaneousMsg,
}: LoginPageProps) {
  // state
  const [usrname, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [domain, setDomain] = useState("");

  const handleSubmit = () => {
    onSubmit({
      username: usrname,
      password: pwd,
      domain,
    });
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
          label="Username"
          value={usrname}
          placeholder="Enter username here ..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={pwd}
          placeholder="Enter password here ..."
          onChange={(e) => setPwd(e.target.value)}
        />
        {domainOptions && domainOptions.length > 0 && (
          <SelectField
            label="Domain"
            value={domain}
            options={domainOptions}
            onChange={(e) => setDomain(e.target.value)}
          />
        )}
        <div className={styles.loginBtn}>
          <Button type="submit" label="Log in" />
        </div>
      </Form>
    </AuthShell>
  );
}
