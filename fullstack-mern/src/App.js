import React from "react";
import NewPlace from "./task1_form/NewPlace";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import UpdatePlace from "./task1_form/UpdatePlace";
import Data from "./task2_table/Data/Data";
import Navbar from "./NavBar/Navbar";

import DropImage from "./task3_imageDrop/DropImage";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='app'>
        <Switch>
          <Route
            exact
            path='/'
            component={NewPlace}
          ></Route>
          <Route path='/table' component={Data}></Route>
          <Route
            path='/places/:placeId'
            component={UpdatePlace}
          ></Route>

          <Route path='/drop' component={DropImage}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
