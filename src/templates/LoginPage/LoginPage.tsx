import { useState, type FormEvent, type ReactNode } from "react";
import dellLogo from "../../assets/logoipsum-288.png";
import styles from "./LoginPage.module.css";
import { Form } from "../../components/Form/Form";
import { TextField } from "../../components/TextField/TextField";
import { Button } from "../../components/Button/Button";
import { SelectField } from "../../components/Select/SelectField";

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
  linksArray?: string[];
  miscellaneousMsg?: string;
}

export function LoginPage({
  productIcon,
  productTitle,
  productSubtitle,
  domainOptions,
  onSubmit,
  miscellaneousMsg,
}: LoginPageProps) {
  // state
  const [usrname, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [domain, setDomain] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit({
      username: usrname,
      password: pwd,
      domain,
    });
  };

  // JSX
  return (
    <div className={styles.loginPage}>
      <div className={styles.upperSection}>
        {productIcon && <div className={styles.productIcon}>{productIcon}</div>}
        <h1 className={styles.title}>{productTitle}</h1>
        <div className={styles.companyLogo}>
          <img
            className={styles.companyLogo}
            src={dellLogo}
            alt="your company logo"
          />
        </div>
        {productSubtitle && (
          <p className={styles.subtitle}>{productSubtitle}</p>
        )}
      </div>
      <div className={styles.inputArea}>
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
      </div>
      {miscellaneousMsg && (
        <div className={styles.miscellaneous}>{miscellaneousMsg}</div>
      )}
    </div>
  );
}
