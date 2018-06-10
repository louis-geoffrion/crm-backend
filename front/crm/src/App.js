import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation.js';
import ClientList from './ClientList.js';
import Client from './Client.js';
import Add from './Add.js';

class App extends Component {
  render() {
    return (
			<HashRouter>
				<div className="App">
					<Navigation />
					<Route path="/clients" component={ClientList}/>
					<Route path="/add" component={Add}/>
				</div>
			</HashRouter>
    );
  }
}

export default App;
