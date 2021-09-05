import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from './Components/header/Header'
import Home from "./Components/home/Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkOut">
            <h1>ILLUMINATI</h1>
          </Route>
          <Route path="/login">
            <h1>Login </h1>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;








// https://www.daraz.pk/shop/aa-brothers?path=index.htm&langFlag=en&lang=en&spm=0.0.categoryBar_4607565.0
