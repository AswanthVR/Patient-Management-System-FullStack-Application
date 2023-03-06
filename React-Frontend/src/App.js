import React, { Component } from 'react'; 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import HeaderComponent from './components/HeaderComponent';
import Login from './components/entry/Login';
import SignUp  from './components/entry/SignUp'

//new
import Update from './components/PAGES/Update';
import Delete from './components/PAGES/Delete';
import home from './components/PAGES/home';
import Createpatient from './components/PAGES/Createpatient'
import Patientlist from './components/PAGES/Patientlist'
import Viewpatiets from './components/PAGES/Viewpatients' 
import bg from '../src/components/images/bg.jpg'
function App  () {
  
  
    
  return (
    <div>
      <div
       
      > 
        <Router>
        <HeaderComponent/>
              
                <div className="container">
                    <Switch> 
                       

                          {/* //new */}

                        
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/signup" exact component = {SignUp}></Route>
                          <Route path = "/home" exact component = {home}></Route>

                          <Route path = "/patientlist" exact component = {Patientlist}></Route>
                          <Route path = "/home" exact component = {Patientlist}></Route>
                          <Route path = "/patients" exact component = {Patientlist}></Route>
                          <Route path = "/view-patient/:id" component = {Viewpatiets}></Route>
                          <Route path = "/add-patient/:id" component = {Createpatient}></Route>
                          
                          
                          <Route path = "/updatepatients" component = {Update}></Route>
                          <Route path = "/deletepatients" component = {Delete}></Route>

  
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    </div>
    
  );
} 

export default App;
