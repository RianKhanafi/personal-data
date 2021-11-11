import { createBrowserHistory } from "history";
import { useUserData } from "pages/Add/context/hook";
import { UserDataContext } from "pages/Add/context/userdata";
import NewData from "pages/Add/newData";
import Home from "pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";

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
