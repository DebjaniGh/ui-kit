import { RotateCw } from "lucide-react";
import {
  Button,
  //   ButtonProps
} from "../src/components/Button/Button";

function App() {
  // const btnConfig1: ButtonProps = {
  //     label: "Power Control",
  //     onClick:() => console.log("clicked power control")
  // };

  return (
    <div style={{ display: "inline-flex", gap: 12, padding: 18 }}>
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
  );
}

export default App;
