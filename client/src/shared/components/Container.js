import React from 'react';

export const Container = (props) => {
	return (
		<div className="content-container">
			{props.children}
		</div>
	);
};