import React from 'react';
import "./App.css"

import Home from "./pages/Home"
import Error from "./pages/Error"
import SingleRoom from "./pages/SingleRoom"
import Rooms from "./pages/Rooms"
import{Route,Switch} from 'react-router-dom'
import Navbar from './Components/navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path='/rooms' component={Rooms}></Route>
        <Route exact path='/rooms/:slug' component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
