import React, { Component } from 'react';
import '../css/Header.css';
// import {addAttribute, removeAttribute} from '../functional/SidebarToggler';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      show: true,
      isClicked: false
    }
  }
  
  // still unsolved yet while trying to make able show the drawer (sidebar) from hidden state (if the width of device is under 800px)
  // and it's been 12 hours longer for this
  render() {
    return (
      <header>
        <nav>
          <button className="menu" id="hamburger" /** onClick={this.state.show? removeAttribute : addAttribute} */><span id="icon">☰</span></button>
          <div className="menu"> <li><a href="#">Home</a></li> </div>
          <div className="menu"> <li><a href="#">Services</a></li> </div>
          <div className="menu"> <li><a href="#">About Me</a></li> </div>
          <div className="menu"> <li><a href="#">Contact Me</a></li> </div>
        </nav>
      </header>
    )
  }
}