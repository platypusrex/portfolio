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
		error,
		onChange,
		onFocus,
		onBlur
	} = props;

	const Error = (
		<React.Fragment>
			{error && <span className="input__error">{error}</span>}
		</React.Fragment>
	);

	if (textArea) {
		return (
			<div className="input__wrapper">
				<textarea
					className={`textArea ${error ? 'error' : ''}`}
					disabled={disabled}
					value={value}
					placeholder={placeholder}
					cols={cols}
					rows={rows}
					onChange={e => onChange(e.target.value)}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
				{Error}
			</div>
		)
	}

	return (
		<div className="input__wrapper">
			<input
				className={`input ${error ? 'error' : ''}`}
				disabled={disabled}
				value={value}
				placeholder={placeholder}
				type={type}
				onChange={e => onChange(e.target.value)}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			{Error}
		</div>
	);
};

Input.defaultProps = {
	type: inputTypes.text,
	rows: 12
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
	onBlur: PropTypes.func,
	error: PropTypes.string
};

