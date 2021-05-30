import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";


function App() {

  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return (
    <div>
      <Router>
        {
          spinner && <Loader className='spinner'
            type="Grid"
            color="#8f49ff"
            height={80}
            width={80}
            timeout={4000}
          />
        }

        <Header></Header>
        {!spinner &&
          <Switch>
            {
              spinner && <Loader
                type="Grid"
                color="#76c96e"
                height={80}
                width={80}
                timeout={4000}
              />
            }
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/foodDetails/:id">
              <FoodDetails></FoodDetails>
            </Route>
            <Route path="/login">
              {/* <LogIn></LogIn> */}
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>}
      </Router>
    </div>
  );
}

export default App;
