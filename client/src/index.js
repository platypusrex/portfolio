import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'typeface-montserrat'
import 'typeface-cardo';
import './index.css';
import { App } from "./App";
import registerServiceWorker from './registerServiceWorker';
import { UIStateProvider } from "./shared/containers/LayoutProvider";

ReactDOM.render(
	<Router>
		<Switch>
			<UIStateProvider>
				<App />
			</UIStateProvider>
		</Switch>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
