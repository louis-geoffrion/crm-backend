import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname	: '',
			lastname	: '',
			phone			: '',
			email			: '',
			company		: '',
			agent			: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const target = event.target;
		const name = target.name
		this.setState({
			[name]:event.target.value });
	}
	handleSubmit(event) {
		var details = {
				firstname	: this.state.firstname,
				lastname	: this.state.lastname,
				company		: this.state.company ,
				phone			: this.state.phone		,
				email 		: this.state.email		,
				agent			: this.state.agent
		};
		// Encode a Post response with x-www-form-urlencoded
		var formBody = [];
		for (var property in details) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(details[property]);
			formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

		fetch('http://192.168.1.83:8000/clients', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body: formBody
		})

		alert('A name was submitted: ' + this.state.firstname + this.state.lastname + this.state.company + this.state.phone + this.state.email + this.state.agent);
		event.preventDefault();
	}
	
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<FormGroup>
					<ControlLabel> First Name </ControlLabel>
					<FormControl
						type="text"
						name="firstname"
						value= {this.state.firstname}
						placeholder="last name"
						onChange={this.handleChange}
						/>
					<ControlLabel> Last Name </ControlLabel>
					<FormControl
						type="text"
						name="lastname"
						value= {this.state.lastname}
						placeholder="last name"
						onChange={this.handleChange}
						/>
					<ControlLabel> Company </ControlLabel>
					<FormControl
						type="text"
						name="company"
						value= {this.state.company}
						placeholder="company"
						onChange={this.handleChange}
						/>
					<ControlLabel> Phone Number </ControlLabel>
					<FormControl
						type="text"
						name="phone"
						value= {this.state.phone}
						placeholder="phone"
						onChange={this.handleChange}
						/>
					<ControlLabel> Email Address</ControlLabel>
					<FormControl
						type="text"
						name="email"
						value= {this.state.email}
						placeholder="email"
						onChange={this.handleChange}
						/>
					<ControlLabel> Agent Name</ControlLabel>
					<FormControl
						type="text"
						name="agent"
						value= {this.state.agent}
						placeholder="Agent Name"
						onChange={this.handleChange}
						/>
						<Button type="submit"> Submit</Button>
				</FormGroup>
			</form>
		);
	}
}
