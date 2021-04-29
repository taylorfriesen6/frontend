import './App.css';
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlantCollection from './components/PlantCollection';
import SpeciesList from './components/SpeciesList';
import  NavBar  from "./components/NavBar";
import { Route } from "react-router-dom";
import NoPlants from './components/NoPlants';
import IndividualPlant from './components/IndividualPlant';


function App() {
  return (
    <div>
      <NavBar />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path='/collection' component={PlantCollection} />
      <ProtectedRoute path="/addplant" component={SpeciesList} />
      <ProtectedRoute path="/no-plants" component={NoPlants} />
      <ProtectedRoute path="/individual-plant" component={IndividualPlant} />
    </div>
  );
}

export default App;
