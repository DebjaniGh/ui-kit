// import { RotateCw } from "lucide-react";
import { Button } from "../src/components/Button/Button";
import { TextField } from "../src/components/TextField/TextField";
import { useState } from "react";
import "./App.css";
import { SelectField } from "../src/components/Select/SelectField";
import { Form } from "../src/components/Form/Form";

function App() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [selectVal, setSelectedVal] = useState("");
  const selectOptions: { label: string; value: string }[] = [
    { label: "This BMC UI", value: "bmc_ui" },
    { label: "LDAP", value: "ldap" },
    { label: "Active Directory", value: "active_dir" },
  ];
  const onSubmit = () => {
    console.log({ username, pwd, selectVal });
  };

  return (
    <div>
      {/* <div className="btn-display">
        <Button
          label="Power Control"
          onClick={() => console.log("clicked power control")}
        ></Button>
        <Button label="Log In" variant="secondary" onClick={() => {}} />
        <Button
          icon={<RotateCw size={16} />}
          label="Reboot System"
          variant="primary"
          onClick={() => {}}
          disabled
        />
      </div> */}
      <Form onSubmit={onSubmit}>
        {/* children of Form */}
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <SelectField
          label="Select Framework: "
          value={selectVal}
          options={selectOptions}
          onChange={(e) => setSelectedVal(e.target.value)}
        />
        <Button label="Log In" type="submit"></Button>
      </Form>
    </div>
  );
}

export default App;
