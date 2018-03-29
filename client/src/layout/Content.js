import React from 'react';

export const Content = (props) => {
	const {children} = props;

	return (
		<div className="content">
			{children}
		</div>
	)
};