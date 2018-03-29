import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-montserrat'
import 'typeface-cardo';
import './index.css';
import { App } from "./App";
import registerServiceWorker from './registerServiceWorker';
import { UIStateProvider } from "./shared/containers/LayoutProvider";

ReactDOM.render(
	<UIStateProvider>
		<Router>
			<App />
		</Router>
	</UIStateProvider>,
	document.getElementById('root')
);
registerServiceWorker();
