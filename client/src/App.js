import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Jumbotron/>
      <Switch>
        <Route exact path={["/", "/books"]}>
          <Search/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
