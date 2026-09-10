import { useState, type ReactNode } from "react";

import styles from "./LoginPage.module.css";
import { Form } from "../../components/Form/Form";
import { TextField } from "../../components/TextField/TextField";
import { Button } from "../../components/Button/Button";
import { SelectField } from "../../components/Select/SelectField";
import { AuthShell } from "../AuthShell/AuthShell";

/** What onSubmit hands back. `domain` is absent unless the caller passed
 *  `domainOptions`, since the selector is only rendered in that case. */
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

/**
 * Standard username/password login screen, with an optional domain selector.
 *
 * Page chrome comes from AuthShell; this template owns only the credential
 * fields and the state behind them.
 */
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
  // Field values live here and reach the caller only on submit, so the
  // password is never lifted into parent state or re-rendered from above.
  const [usrname, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [domain, setDomain] = useState("");

  // Form already suppressed the native submit; just report the values.
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
        {/* Domain selector only appears when there is something to choose
            from -- a one-entry or empty dropdown is just noise. */}
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
