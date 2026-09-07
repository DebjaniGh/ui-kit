import productIcon from "./assets/new_logo.svg";
import "./App.css";
import { LoginPage, type Credentials } from "./templates/LoginPage/LoginPage";

function App() {
  const selectOptions: { label: string; value: string }[] = [
    { label: "This BMC UI", value: "bmc_ui" },
    { label: "LDAP", value: "ldap" },
    { label: "Active Directory", value: "active_dir" },
  ];

  const handleLogin = (credentials: Credentials) => {
    console.log(credentials);
  };

  return (
    <div>
      <LoginPage
        productIcon={<img src={productIcon} alt="product icon" />}
        productTitle="Server BMC GUI"
        productSubtitle="Server Hostname | Server Model | License Type"
        domainOptions={selectOptions}
        onSubmit={handleLogin}
        miscellaneousMsg="Security Notice: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        "
      />
    </div>
  );
}

export default App;
