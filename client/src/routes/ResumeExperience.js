import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from "../shared/components/Paragraph";

export const ResumeExperience = (props) => {
	const {title, subTitle, summary, description} = props;
	return (
		<div className="resume-experience">
			<div className="resume-experience__title-wrapper flex-container">
				<h4 className="resume-experience__company">
					{title}
				</h4>
				<small className="resume-experience__position">
					{subTitle}
				</small>
			</div>

			<Paragraph>{summary}</Paragraph>

			{description &&
			<div>
				<ul className="resume-experience__list">
					{description.map((item, i) => <li key={i} className="resume-experience__list-item">{item}</li>)}
				</ul>
			</div>}
		</div>
	)
};

ResumeExperience.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	summary: PropTypes.string,
	description: PropTypes.arrayOf(PropTypes.string)
};

