import React, { Component } from 'react';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 32,
	};

	handleInputChanged = (event) => {
		const value = event.target.value;
		this.props.updateEvents(null, value);
		this.setState({
			numberOfEvents: value,
		});
	};

	render() {
		return (
			<div className="number-of-events">
				<label className="number-of-events-label">Number of Events: </label>
				<input type="number" className="event-number" value={this.state.numberOfEvents} onChange={this.handleInputChanged}></input>
			</div>
		);
	}
}

export default NumberOfEvents;