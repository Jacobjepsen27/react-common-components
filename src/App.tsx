import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentWidth = styled.div`
  width: 200px;
`;

export interface Formvalues {
  fruit: string;
  car: string;
}

function App() {
  return (
    <Router>
      <Center>
        <h1>React common components</h1>
        <ContentWidth>
          {/*TODO: route to different components here*/}
        </ContentWidth>
      </Center>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
