import React from 'react';
import { compose } from "recompose";
import { Route, Switch } from 'react-router-dom';
import { Layout } from "./layout/Layout";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";

export const AppComponent = () => {
	return (
		<Layout>
			<Switch>
				<Route exact={true} path={'/'} component={About}/>
				<Route path={'/contact'} component={Contact}/>
			</Switch>
		</Layout>
	);
};

export const App = compose()(AppComponent);
