import React from 'react';
import { compose, withHandlers } from "recompose";
import { AppContext, menuItems } from "../shared/containers/LayoutProvider";
import { MenuButton } from "../shared/components/MenuButton";
import { withRouter } from "react-router-dom";

export const MenuComponent = (props) => {
	const menuClass = 'menu';

	return (
		<AppContext.Consumer>
			{({appState, actions}) => (
				<div className={`${menuClass} ${appState.isSidebarVisible ? 'open' : ''}`}>
					<div className="menu__inner flex-container column center-all">
						<MenuButton
							title="About"
							subTitle="Who I Am"
							icon="ti-user"
							isActive={appState.activeMenuItem === menuItems.about}
							onClick={() => props.handleMenuItemSelect(actions, '/', menuItems.about)}
						/>

						<MenuButton
							title="Contact"
							subTitle="Let's get in touch"
							icon="ti-email"
							isActive={appState.activeMenuItem === menuItems.contact}
							onClick={() => props.handleMenuItemSelect(actions, '/contact', menuItems.contact)}
						/>
					</div>
				</div>
			)}
		</AppContext.Consumer>
	);
};

export const Menu = compose(
	withRouter,
	withHandlers({
		handleMenuItemSelect: (props) => (actions, path, menuItem) => {
			actions.toggleSidebar();
			actions.setActiveMenuItem(menuItem);
			props.history.push(path)
		},
	})
)(MenuComponent);