import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/Auth/Log/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "./config/firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // peice of code which run basedon a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is signed out.
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any cleanUp operation go in here ...
      unsubscribe();
    };
  }, []);
  
  console.log("here is user ///>",user);
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkOut">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// https://www.daraz.pk/shop/aa-brothers?path=index.htm&langFlag=en&lang=en&spm=0.0.categoryBar_4607565.0
