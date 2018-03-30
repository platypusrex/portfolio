import React from 'react';
import PropTypes from 'prop-types';

export const MenuToggle = (props) => {
	const {onClick, isOpen} = props;
	const hamburgerClass = `hamburger ${isOpen ? 'open' : 'closed'}`;

	return (
		<a className="menu-toggle flex-container center-all" onClick={onClick}>
			<div className={hamburgerClass}>
				<span className="bar bar-1"/>
				<span className="bar bar-2"/>
				<span className="bar bar-3"/>
			</div>
		</a>
	);
};

MenuToggle.propTypes = {
	onClick: PropTypes.func,
	isOpen: PropTypes.bool.isRequired
};