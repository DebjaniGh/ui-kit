import { AppHeader } from "./components/AppHeader/AppHeader";
import { IconButton } from "./components/IconButton/IconButton";
import searchIcon from "./assets/search.svg";
import userIcon from "./assets/user.svg";
import helpIcon from "./assets/help-icon.svg";

function App() {
  return (
    <div>
      <AppHeader
        productName="BMC UI Version 10 | License Type"
        actions={
          <>
            <IconButton
              icon={<img src={searchIcon} alt="" />}
              ariaLabel="Search"
              onClick={() => console.log("Search clicked")}
            />
            <IconButton
              icon={<img src={userIcon} alt="" />}
              ariaLabel="Lock"
              onClick={() => console.log("Lock clicked")}
            />
            <IconButton
              icon={<img src={helpIcon} alt="" />}
              ariaLabel="Help"
              onClick={() => console.log("Help clicked")}
            />
          </>
        }
      />
      {/* rest of your dashboard content */}
    </div>
  );
}

export default App;
