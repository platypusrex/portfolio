import React from 'react';
import { compose } from "recompose";
import { Route, Switch } from 'react-router-dom';
import { Layout } from "./layout/Layout";
import { Page } from "./shared/components/Page";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Resume } from "./routes/Resume";
import { NotFound } from "./routes/NotFound";

export const AppComponent = () => {
	return (
		<Layout>
			<Switch>
				<Route exact={true} path={'/'} component={Page(About)}/>
				<Route path={'/contact'} component={Page(Contact)}/>
				<Route path={'/resume'} component={Page(Resume)}/>
				<Route component={Page(NotFound)}/>
			</Switch>
		</Layout>
	);
};

export const App = compose()(AppComponent);
