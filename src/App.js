import React from 'react';
import Container from './components/conatiner/Container'
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  } from "react-router-dom";
import Output from './components/output/Output';
import Editnotes from "./components/editnote/Editnotes";
import Contactus from './Pages/Contactus'
import Disclaimer from './Pages/Disclaimer'
import Privacypolicy from './Pages/Privacypolicy'
function App() {
  
  return (
    <Router>
        

        <Switch>
          <Route exact path="/" render={(routeProps)=>    <Container {...routeProps} />}/>     
          
          <Route exact path="/view/:id" render={(routeProps)=><Output {...routeProps}/>}/>
          <Route exact path="/notes/:id" render={(routeProps)=><Editnotes {...routeProps}/>}/>
          <Route exact path="/page/contact-us" render={()=><Contactus/>}/>
          <Route exact path="/page/privacy-policy" render={()=><Privacypolicy/>}/>
          <Route exact path="/page/disclaimer" render={()=><Disclaimer/>}/>
        </Switch>
    </Router>
  );
}

export default App;
