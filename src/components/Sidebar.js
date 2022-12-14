import React, { Component } from 'react';
import '../css/Sidebar.css';

export default class Sidebar extends Component {
  constructor(){
		super();
		this.state = {
			show: true,
		}
	}
	
	render() {
		return (
			<div className="sidebar" id="drawer">
				<div className="sidebar-menu-container">
					<div className="sidebar-menu"><li><a href="#">Dashboard</a></li></div>
					<div className="sidebar-menu"><li><a href="#">Info</a></li></div>
					<div className="sidebar-menu"><li><a href="#">Settings</a></li></div>
					<div className="sidebar-menu"><li><a href="#">Notifications<span className="notification">6</span></a></li></div>
        	</div>
			</div>
		)
	}
}