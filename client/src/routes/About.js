import React from 'react';
import { AppContext } from "../shared/containers/LayoutProvider";
import { compose, lifecycle } from "recompose";
import { withState } from "../shared/containers/withState";

const initialState = {
	cities: []
};

export const AboutComponent = (props) => {
	const {state} = props;

	return (
		<AppContext.Consumer>
			{({appState, actions}) => (
				<React.Fragment>
					<div style={{margin: '0 auto', maxWidth: '300px'}}>
						{state.cities.map(city => (
							<div key={city.name} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
								<span>{city.name}</span>
								<span>{city.population}</span>
							</div>
						))}
					</div>
					<span>{appState.count}</span>
					<button onClick={actions.increment}>+</button>
					<button onClick={actions.decrement}>-</button>
				</React.Fragment>
			)}
		</AppContext.Consumer>
	);
};

export const About = compose(
	withState(initialState),
	lifecycle({
		componentWillMount: async function () {
			const {setState} = this.props;
			const response = await fetch('api/cities');
			const cities = await response.json();

			setState({cities});
		}
	})
)(AboutComponent);