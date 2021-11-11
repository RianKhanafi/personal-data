import logo from "./logo.svg";
import "./assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "pages/home";
import NewData from "pages/Add/newData";
import { UserDataContext } from "pages/Add/context/userdata";
import { useUserData } from "pages/Add/context/hook";

function App() {
  const { state, userdata } = useUserData();
  // console.log("state =>", state);
  return (
    <UserDataContext.Provider value={{ state, userdata }}>
      <Router>
        <Switch>
          <Route path="/new-data" render={(props) => <NewData {...props} />} />
          <Route path="/" extract render={(props) => <Home {...props} />} />
        </Switch>
      </Router>
    </UserDataContext.Provider>
  );
}

export default App;
