import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "./Icon";

export const LinkButton = (props) => {
	const {title, subTitle, icon, onClick} = props;

	return (
		<div className="link-button">
			<a className="link-button__wrapper" onClick={onClick}>
				<Icon className={icon} size={46}/>
				<h3 className="link-button__title">{title}</h3>
				<p className="link-button__subTitle">{subTitle}</p>
			</a>
		</div>
	);
};

LinkButton.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};