import React from 'react';
import { Menu } from "./Menu";
import { Content } from "./Content";

export const Layout = (props) => (
	<div className="layout flex-container">
		<Menu/>

		<Content>
			{props.children}
		</Content>
	</div>
);