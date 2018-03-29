import React from 'react';
import { compose, withHandlers } from "recompose";
import { MenuButton } from "../shared/components/MenuButton";
import { withRouter } from "react-router-dom";

export const MenuComponent = (props) => (
	<div className="menu flex-container column center-all">
		<MenuButton
			title="About"
			subTitle="Who I Am"
			icon="ti-user"
			onClick={props.handleNavToAbout}
		/>

		<MenuButton
			title="Contact"
			subTitle="Let's get in touch"
			icon="ti-email"
			onClick={props.handleNavToContact}
		/>
	</div>
);

export const Menu = compose(
	withRouter,
	withHandlers({
		handleNavToAbout: (props) => () => props.history.push('/'),
		handleNavToContact: (props) => () => props.history.push('/contact')
	})
)(MenuComponent);