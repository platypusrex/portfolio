import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "./Icon";

export const SocialLink = (props) => {
	const {icon, style, url} = props;
	const target = url.includes('mail') || url.includes('tel') ? '_top' : '_blank';

	return (
		<a className="social-link flex-container center-all" href={url} target={target} style={style}>
			<Icon className={icon}/>
		</a>
	);
};

SocialLink.propTypes = {
	icon: PropTypes.string.isRequired,
	style: PropTypes.object,
	url: PropTypes.string
};