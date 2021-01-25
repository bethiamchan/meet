import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as atatus from 'atatus-spa';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();

atatus.config('f3c2e1d59ba14c178adc2a7501e34d46').install();
