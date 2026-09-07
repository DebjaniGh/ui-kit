import { RotateCw } from "lucide-react";
import { Button } from "../src/components/Button/Button";
import { TextField } from "../src/components/TextField/TextField";
import { useState } from "react";
import "./App.css";
import { SelectField } from "./components/Select/SelectField";

function App() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [selectVal, setSelectedVal] = useState("");
  const selectOptions: { label: string; value: string }[] = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
  ];
  return (
    <div>
      <div className="btn-display">
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
      </div>
      <div className="txtfields">
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
      </div>
      <div className="select-field">
        <SelectField
          label="Select Framework: "
          value={selectVal}
          options={selectOptions}
          onChange={(e) => setSelectedVal(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
