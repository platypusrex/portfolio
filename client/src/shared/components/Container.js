import React from 'react';
import PropTypes from 'prop-types';

export const Container = (props) => {
	const {className, style} = props;
	const containerClass = `content-container ${className ? className : ''}`;

	return (
		<div className={containerClass} style={style}>
			{props.children}
		</div>
	);
};

Container.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
