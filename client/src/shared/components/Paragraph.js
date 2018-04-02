import React from 'react';
import PropTypes from 'prop-types';
import { createClassName } from "../utils/createClassName";

const textSize = {
	xs: 'xs',
	sm: 'sm',
	md: 'md',
	lg: 'lg'
};

export const Paragraph = (props) => {
	const {prefixCls, className, noMargin, style} = props;
	const sizeClass = getSizeClass(props);
	const paragraphClass = `${prefixCls} ${className ? className : ''} ${sizeClass}`;

	return (
		<p className={paragraphClass} style={{marginBottom: noMargin ? 0 : null, ...style}}>
			{props.children}
		</p>
	);
};

Paragraph.defaultProps = {
	prefixCls: 'paragraph'
};

function getSizeClass (props) {
	const {prefixCls, size} = props;

	switch (size) {
		case textSize.xs:
			return createClassName(prefixCls, textSize.xs);
		case textSize.sm:
			return createClassName(prefixCls, textSize.sm);
		case textSize.md:
			return createClassName(prefixCls, textSize.md);
		case textSize.lg:
			return createClassName(prefixCls, textSize.lg);
		default:
			return createClassName(prefixCls, textSize.md)
	}
}

Paragraph.propTypes = {
	className: PropTypes.string,
	size: PropTypes.oneOf(Object.keys(textSize).map(key => textSize[key])),
	noMargin: PropTypes.bool,
	style: PropTypes.object
};