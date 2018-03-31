import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "./Icon";

export const SocialLink = (props) => {
	const {icon, style, url} = props;

	return (
		<a className="social-link flex-container center-all" href={url} target="_blank" style={style}>
			<Icon className={icon}/>
		</a>
	);
};

SocialLink.propTypes = {
	icon: PropTypes.string.isRequired,
	style: PropTypes.object,
	url: PropTypes.string
};