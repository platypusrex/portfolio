import React from 'react';
import { AppContext } from "../shared/containers/LayoutProvider";
import { MenuToggle } from "../shared/components/MenuToggle";

export const Content = (props) => {
	const {children} = props;

	return (
		<AppContext.Consumer>
			{({appState, actions}) => (
				<div className={`content ${appState.isSidebarVisible ? 'open' : ''}`}>
					<MenuToggle isOpen={appState.isSidebarVisible} onClick={actions.toggleSidebar}/>

					{children}
				</div>
			)}
		</AppContext.Consumer>
	)
};