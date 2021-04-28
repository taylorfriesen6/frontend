import './App.css';
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlantCollection from './components/PlantCollection'
import  NavBar  from "./components/NavBar";
import { Route } from "react-router-dom";
import NoPlants from './components/NoPlants';
import IndividualPlant from './components/IndividualPlant';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path='/collection' component={PlantCollection} />
      <Route path="/no-plants" component={NoPlants} />
      <Route path="/individual-plant" component={IndividualPlant} />
    </div>
  );
}

export default App;
