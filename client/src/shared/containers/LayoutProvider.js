import React, { createContext }  from 'react'
import { compose } from "recompose";
import { withState } from "./withState";

export const AppContext = createContext();
export const menuItems = {
	about: 'about',
	contact: 'contact'
};

const initialState = {
	isSidebarVisible: false,
	activeMenuItem: menuItems.about,
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

export const UIStateProvider = compose(
	withState(initialState)
)(UIStateProviderComponent);