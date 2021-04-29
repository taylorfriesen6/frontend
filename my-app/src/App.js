import './App.css';
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile"
import EditProfile from "./components/EditProfile";
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
      <Route path="/addplant" component={SpeciesList} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path='/collection' component={PlantCollection} />
      <Route path="/no-plants" component={NoPlants} />
      <Route path="/editprofile" component={EditProfile} />
      <Route path="/profile" component={Profile} />
    </div>
  );
}

export default App;
