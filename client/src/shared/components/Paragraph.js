import React from 'react';
import PropTypes from 'prop-types';

export const Paragraph = (props) => {
	return (
		<p className="paragraph">
			{props.text}
		</p>
	);
};

Paragraph.propTypes = {
	text: PropTypes.string.isRequired
};