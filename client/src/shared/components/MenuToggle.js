import React from 'react';
import { Icon } from "./Icon";

export const MenuToggle = (props) => {
	return (
		<a className="menu-toggle flex-container center-all">
			<Icon className="ti-menu" size={35}/>
		</a>
	);
};