import React, { Component } from 'react';
import '../css/Header.css';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      show: true, 
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TEST</a>
          <button className="navbar-toggler border" 
          onClick={ () => { this.setState({show: !this.state.show}) } }>
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item text-light">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item text-light">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item text-light">
                <a className="nav-link" href="#">About Me</a>
              </li>
              <li className="nav-item text-light">
                <a className="nav-link" href="#">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}