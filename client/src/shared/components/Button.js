import React from 'react';
import PropTypes from 'prop-types';

const buttonSizes = {
	sm: 'sm',
	md: 'md',
	lg: 'lg'
};

const hoverState = {
	slideDown: 'slide-down',
	slide: 'slide',
	fillOut: 'fill-out',
	fillIn: 'fill-in',
	skew: 'skew'
};

export const Button = (props) => {
	const {className, style, disabled, onClick} = props;
	const sizeClass = getButtonSize(props);
	const hoverClass = getButtonHover(props);
	const buttonClass = `button ${sizeClass} ${hoverClass} ${className || ''}`;

	return (
		<div>
			<button
				className={buttonClass}
				disabled={disabled}
				onClick={onClick}
				style={style}
			>
				<span className="button__inner">
					{props.children}
				</span>
			</button>
		</div>
	);
};

function createClassName (prefixCls, className) {
	return `${prefixCls}__${className}`;
}

function getButtonSize (props) {
	const {prefixCls, size} = props;

	switch(size) {
		case buttonSizes.sm:
			return createClassName(prefixCls, buttonSizes.sm);
		case buttonSizes.md:
			return createClassName(prefixCls, buttonSizes.md);
		case buttonSizes.lg:
			return createClassName(prefixCls, buttonSizes.lg);
		default:
			return createClassName(prefixCls, buttonSizes.md);
	}
}

function getButtonHover (props) {
	const {prefixCls, hover} = props;

	switch(hover) {
		case hoverState.slide:
			return createClassName(prefixCls, hoverState.slide);
		case hoverState.slideDown:
			return createClassName(prefixCls, hoverState.slideDown);
		case hoverState.fillIn:
			return createClassName(prefixCls, hoverState.fillIn);
		case hoverState.fillOut:
			return createClassName(prefixCls, hoverState.fillOut);
		case hoverState.skew:
			return createClassName(prefixCls, hoverState.skew);
		default:
			return createClassName(prefixCls, hoverState.skew);
	}
}

Button.defaultProps = {
	prefixCls: 'button'
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	style: PropTypes.object,
	size: PropTypes.oneOf(Object.keys(buttonSizes).map(key => buttonSizes[key])),
	hover: PropTypes.oneOf(Object.keys(hoverState).map(key => hoverState[key]))
};

