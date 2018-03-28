import React from 'react';
import { compose, lifecycle } from "recompose";
import { Layout } from "./layout/Layout";
import { withState } from "./shared/containers/withState";

const initialState = {
	cities: []
};

const AppComponent = (props) => {
	const {state} = props;

	return (
		<Layout>
			<div style={{margin: '0 auto', maxWidth: '300px'}}>
				{state.cities.map(city => (
					<div key={city.name} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
						<span>{city.name}</span>
						<span>{city.population}</span>
					</div>
				))}
			</div>
		</Layout>
	);
};

export const App = compose(
	withState(initialState),
	lifecycle({
		componentWillMount: async function () {
			const {setState} = this.props;
			const response = await fetch('api/cities');
			const cities = await response.json();

			setState({cities});
		}
	})
)(AppComponent);
