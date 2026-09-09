import productIcon from "./assets/new_logo.svg";
import "./App.css";
// import { LoginPage, type Credentials } from "./templates/LoginPage/LoginPage";
// import {
//   SmartCardLoginPage,
//   type SCCredentials,
// } from "./templates/SmartCardLogin/SmartCardLogin";
import {
  RSALoginPage,
  type RSACredentials,
} from "./templates/RSALoginPage/RSALoginPage";

function App() {
  // const selectOptions: { label: string; value: string }[] = [
  //   { label: "This BMC UI", value: "bmc_ui" },
  //   { label: "LDAP", value: "ldap" },
  //   { label: "Active Directory", value: "active_dir" },
  //   { label: "Smart Card", value: "smart_card" },
  //   { label: "RSA", value: "rsa" },
  // ];

  // const links = [
  //   { label: "Help", href: "https://www.dell.com/support/home" },
  //   {
  //     label: "Drivers & Downloads",
  //     href: "https://www.dell.com/support/home/en-us?app=drivers",
  //   },
  //   {
  //     label: "Manuals",
  //     href: "https://www.dell.com/support/home/en-us?app=manuals",
  //   },
  //   { label: "TechCenter", href: "https://developer.dell.com" },
  // ];

  // const handleLogin = (credentials: Credentials) => {
  //   console.log(credentials);
  // };

  const handleRSALogin = (credentials: RSACredentials) => {
    console.log(credentials);
  };

  // const handleSmartCardLogin = (credentials: SCCredentials) => {
  //   console.log(credentials);
  // };

  const onCancel = () => {
    console.log("action canceled");
  };

  return (
    <div>
      {/* <LoginPage
        productIcon={<img src={productIcon} alt="product icon" />}
        productTitle="Server BMC GUI"
        productSubtitle="Server Hostname | Server Model | License Type"
        domainOptions={selectOptions}
        onSubmit={handleLogin}
        linksArray={links}
        miscellaneousMsg="Security Notice: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        "
      /> */}
      <RSALoginPage
        productIcon={<img src={productIcon} alt="product icon" />}
        productTitle="Server BMC GUI"
        onSubmit={handleRSALogin}
        onCancel={onCancel}
        miscellaneousMsg="Copyright Notice: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      {/* <SmartCardLoginPage
        productIcon={<img src={productIcon} alt="product icon" />}
        productTitle="Server BMC GUI"
        onSubmit={handleSmartCardLogin}
        onCancel={onCancel}
        miscellaneousMsg="Copyright Notice: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> */}
    </div>
  );
}

export default App;
