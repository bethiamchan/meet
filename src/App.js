import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';
import { extractLocations, getEvents } from './api';

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		currentLocation: 'all',
		alertText: '',
	};

	updateEvents = (location, eventCount) => {
		if (!navigator.onLine) {
			this.setState({
				alertText: 'You are currently offline and viewing data from your last visit.',
			});
		} else {
			this.setState({
				alertText: '',
			});
		}

		const { currentLocation, numberOfEvents } = this.state;
		//probably change eventS to events.events, but events.filter might be fine
		if (location) {
			getEvents().then((events) => {
				const locationEvents = location === 'all' ? events.events : events.events.filter((event) => event.location === location);
				const filteredEvents = locationEvents.slice(0, numberOfEvents);
				return this.setState({
					events: filteredEvents,
					currentLocation: location,
					locations: events.locations,
				});
			});
		} else {
			getEvents().then((events) => {
				const locationEvents = currentLocation === 'all' ? events.events : events.events.filter((event) => event.location === currentLocation);
				const filteredEvents = locationEvents.slice(0, eventCount);
				if (this.mounted) {
					return this.setState({
						events: filteredEvents,
						numberOfEvents: eventCount,
						locations: events.locations,
					});
				}
			});
		}
	};

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events.events,
					locations: events.locations,
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		return (
			<div className="App">
				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
				<NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
				<OfflineAlert text={this.state.alertText} />
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
