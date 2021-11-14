import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";

import "./styles.css";

const App = () => {
  const [smallDevice, setSmallDevice] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () =>
      setSmallDevice(window.innerWidth < 700 ? true : false);

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <Router>
        <header>
          <div className="logo">
            <img
              src="https://quantumzyme.com/assets/img/Quantumzyme_logov2.png"
              height="30px"
              width="30px"
            />
          </div>
          <nav>
            <Link to="/login">Login</Link>
            &nbsp;&nbsp;
            <Link to="/signup">Signup</Link>
          </nav>
        </header>
        <div
          className="App"
          style={{
            flexDirection: smallDevice ? "column" : "row"
          }}
        >
          <Switch>
            <Route
              exact
              path="/signup"
              render={() => <Signup smallDevice={smallDevice} />}
            />
            <Route
              exact
              path="/"
              render={() => <Login smallDevice={smallDevice} />}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
