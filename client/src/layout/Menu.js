import React from 'react';
import { compose, withHandlers } from "recompose";
import { AppContext } from "../shared/containers/LayoutProvider";
import { MenuButton } from "../shared/components/MenuButton";
import { withRouter } from "react-router-dom";

export const MenuComponent = (props) => {
	const menuClass = 'menu flex-container column center-all';

	return (
		<AppContext.Consumer>
			{({appState, actions}) => (
				<div className={`${menuClass} ${appState.isSidebarVisible ? 'open' : ''}`}>
					<MenuButton
						title="About"
						subTitle="Who I Am"
						icon="ti-user"
						onClick={() => props.handleNavToAbout(actions)}
					/>

					<MenuButton
						title="Contact"
						subTitle="Let's get in touch"
						icon="ti-email"
						onClick={() => props.handleNavToContact(actions)}
					/>
				</div>
			)}
		</AppContext.Consumer>
	);
};

export const Menu = compose(
	withRouter,
	withHandlers({
		handleNavToAbout: (props) => (actions) => {
			actions.toggleSidebar();
			props.history.push('/')
		},
		handleNavToContact: (props) => (actions) => {
			actions.toggleSidebar();
			props.history.push('/contact')
		}
	})
)(MenuComponent);