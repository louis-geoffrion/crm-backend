import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Client extends Component {
	
		constructor(props) {
			super(props)
				this.state = {
firstname: "test",
						 lastname:"" ,
						 id: "" 
				}
		}
	componentDidMount() {
		console.log('Hello');
		fetch("http://192.168.1.83:8000/clients/5b1ac994450b5227d9bf00ba")
			.then(response => response.json())
			.then(data => {
						this.setState({
							firstname	: data.firstname,
							lastname	: data.lastname,
							id				:	data._id

						})
						console.log(this.state.firstname);
						console.log(this.state.lastname);
						console.log(this.state.id);
					});
	};
	render() {
		return (
			<div>  {this.state.firstname} : {this.state.lastname}</div>
		)
	}
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<Client />
      </div>
    );
  }
}

export default App;
