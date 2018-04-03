import React from 'react';
import PropTypes from 'prop-types';

export const PageHeader = (props) => {
	const {title, subTitle} = props;

	return (
		<div className="page-header grid-center" id="page-header-cmp">
			<div className="col-12">
				<div className="page-header__wrapper flex-container column center-all">
					<h1 className="page-header__title">{title}</h1>

					<div className="page-header__subTitle-wrapper flex-container column">
						<span className="page-header__subTitle">{subTitle}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

PageHeader.propTypes = {
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]).isRequired,
	subTitle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]).isRequired
};


