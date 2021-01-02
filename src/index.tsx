import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//tailwind css
import './assets/css/tailwind.css';
//redux
import { Provider } from 'react-redux';
import { store } from './store/taskbox/redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
