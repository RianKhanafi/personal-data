import logo from "./logo.svg";
import "./assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "pages/home";
import NewData from "pages/Add/newData";
import { UserDataContext } from "pages/Add/context/userdata";
import { useUserData } from "pages/Add/context/hook";

import { createBrowserHistory } from "history";
function App() {
  const { state, userdata } = useUserData();
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  return (
    <UserDataContext.Provider value={{ state, userdata }}>
      <Router history={history}>
        <Switch>
          <Route
            path="/detail-data/:id"
            render={(props) => <NewData {...props} />}
          />
          <Route path="/new-data" render={(props) => <NewData {...props} />} />
          <Route path="/" extract render={(props) => <Home {...props} />} />
        </Switch>
      </Router>
    </UserDataContext.Provider>
  );
}

export default App;
