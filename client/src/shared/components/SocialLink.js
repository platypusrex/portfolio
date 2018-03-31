import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "./Icon";

export const SocialLink = (props) => {
	const {icon, style} = props;

	return (
		<div className="social-link flex-container center-all" style={style}>
			<Icon className={icon}/>
		</div>
	);
};

SocialLink.propTypes = {
	icon: PropTypes.string.isRequired,
	style: PropTypes.object
};