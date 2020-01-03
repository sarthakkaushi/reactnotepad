import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class NavbarLayout extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <Link class="navbar-brand" to="/">Notepadweb</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/page/contact-us">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/page/privacy-policy">Privacy Policy</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/page/disclaimer">Disclaimer</Link>
        </li>    
      </ul>
    </div>  
  </nav>
            </div>
        )
    }
}
