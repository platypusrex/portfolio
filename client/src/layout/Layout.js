import React from 'react';
import { Navbar } from "./Navbar";

export const Layout = (props) => (
	<div className="layout">
		<Navbar/>
		{props.children}
	</div>
);