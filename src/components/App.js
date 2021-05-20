import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home.js"
import NavBar from "./NavBar/NavBar.js"
import Pissi from "./pisideneme/pissies.js"
import About from "./About/About.js"
import MyPisies from "./PisiCollection/MyPisies.js"
class App extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <br />
        <Switch>
          <Route path="/About" component={About}></Route>
          <Route path="/Pisi" component={Pissi}></Route>
          <Route path="/MyPisies" component={MyPisies}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
