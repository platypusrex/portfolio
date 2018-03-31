import React, { createContext }  from 'react'
import { compose, lifecycle } from "recompose";
import { withState } from "./withState";
import { withRouter } from 'react-router-dom';

export const AppContext = createContext();
export const menuItems = {
	about: 'about',
	contact: 'contact',
	resume: 'resume'
};

const initialState = {
	isSidebarVisible: false,
	count: 0
};

const UIStateProviderComponent = (props) => {
	const {state, setState, children} = props;

	return (
		<AppContext.Provider
			value={{
				appState: state,
				actions: {
					increment: () => setState(ss => ({...ss, count: state.count + 1})),
					decrement: () => setState(ss => ({...ss, count: state.count -1})),
					setActiveMenuItem: (menuItem) => setState(ss => ({...ss, activeMenuItem: menuItem})),
					toggleSidebar: () => setState(ss => ({...ss, isSidebarVisible: !ss.isSidebarVisible}))
				}
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

function setInitialMenuItem (props) {
	const {setState, location} = props;
	let menuItem;

	switch (location.pathname) {
		case '/':
			menuItem = menuItems.about;
			break;
		case '/contact':
			menuItem = menuItems.contact;
			break;
		case '/resume':
			menuItem = menuItems.resume;
			break;
		default:
			menuItem = menuItems.about;
	}

	setState(ss => ({...ss, activeMenuItem: menuItem}));
}

export const UIStateProvider = compose(
	withRouter,
	withState(initialState),
	lifecycle({
		componentDidMount: function () {
			setInitialMenuItem(this.props);
		}
	})
)(UIStateProviderComponent);