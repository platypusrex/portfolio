import React from 'react';
import { MenuToggle } from "../shared/components/MenuToggle";

export const Content = (props) => {
	const {children} = props;

	return (
		<div className="content">
			<MenuToggle/>

			{children}
		</div>
	)
};