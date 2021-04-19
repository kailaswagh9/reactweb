import React from 'react';
import Home from './reactweb/Home';
import Service from './reactweb/Service';
import About from './reactweb/About';
import Contact from './reactweb/Contact';
import Navbar from './reactweb/Navbar';
import Footer from './reactweb/Footer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Route, Switch, Redirect} from 'react-router-dom';
function App(props) {
  return (
    <>

      <Navbar/>
     <Switch>
       <Route exact path="/reactweb" component={Home}/>
       <Route exact path="/reactweb/service" component={Service}/>
       <Route exact path="/reactweb/about" component={About}/>
       <Route exact path="/reactweb/contact" component={Contact}/>
       <Redirect to="/reactweb"/>
     </Switch>
     <Footer />
    </> 
  );
}

export default App;