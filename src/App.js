import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Home from "./components/Home";
import ResponsiveDrawer from "./components/Drawer";
import SelectSeat from "./components/SelectSeat";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
      {/* <ResponsiveDrawer /> */}
      {/* <Home></Home> */}
      {/* <Profile></Profile>*/}
      {/* <Setting></Setting> */}
      {/* <SelectSeat></SelectSeat> */}
    </div>
  );
}

export default App;
