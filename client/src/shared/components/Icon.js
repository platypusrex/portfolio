import React from 'react';
import PropTypes from 'prop-types';

export const Icon = (props) => {
	const {className, wrapperClassName, size, iconStyle, wrapperStyle} = props;
	const wrapperClass = `flex-container center-all ${wrapperClassName}`;
	const iconClass = `ti-icon ${className}`;
	const iconSize = size ? `${size}px` : undefined;

	return (
		<div className={wrapperClass} style={wrapperStyle}>
			<i className={iconClass} style={{...iconStyle, fontSize: iconSize}}/>
		</div>
	);
};

Icon.propTypes = {
	className: PropTypes.string.isRequired,
	wrapperClassName: PropTypes.string,
	size: PropTypes.number,
	iconStyle: PropTypes.object,
	wrapperStyle: PropTypes.object
};