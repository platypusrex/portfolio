import React from 'react';
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";

export const Resume = (props) => {
	return (
		<div className="resume">
			<PageHeader
				title="Frank G. Cooke III"
				subTitle={(
					<React.Fragment>
						frankcooke79@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;(843) 303-6284
						<br/>Charleston, SC
					</React.Fragment>
				)}
			/>

			<Container>

			</Container>
		</div>
	);
};