import React from 'react';
import PropTypes from 'prop-types';

const inputTypes = {
	email: 'email',
	number: 'number',
	password: 'password',
	text: 'text'
};

export const Input = (props) => {
	const {
		type,
		placeholder,
		value,
		disabled,
		textArea,
		cols,
		rows,
		onChange,
		onFocus,
		onBlur
	} = props;

	if (textArea) {
		return (
			<textarea
				className="textArea"
				disabled={disabled}
				value={value}
				placeholder={placeholder}
				cols={cols}
				rows={rows}
				onChange={e => onChange(e.target.value)}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		)
	}

	return (
		<input
			className="input"
			disabled={disabled}
			value={value}
			placeholder={placeholder}
			type={type}
			onChange={e => onChange(e.target.value)}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
};

Input.defaultProps = {
	type: inputTypes.text,
	rows: 15
};

Input.propTypes = {
	type: PropTypes.oneOf(Object.keys(inputTypes).map(key => inputTypes[key])),
	textArea: PropTypes.bool,
	cols: PropTypes.number,
	rows: PropTypes.number,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func
};

