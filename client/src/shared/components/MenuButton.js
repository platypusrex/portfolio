import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "./Icon";

export const MenuButton = (props) => {
	const {title, subTitle, icon, onClick} = props;

	return (
			<a className="menu-button" onClick={onClick}>
				<h3 className="menu-button__title">{title}</h3>

				<div className="menu-button__icon-wrapper flex-container center-all">
					<Icon className={icon} wrapperClassName="menu-button__icon"/>
				</div>

				<p className="menu-button__subTitle">{subTitle}</p>
			</a>
	);
};

MenuButton.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};