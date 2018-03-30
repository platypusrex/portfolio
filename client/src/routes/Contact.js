import React from 'react';
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";

export const Contact = () => {
	return (
		<div className="contact">

			<PageHeader
				title="Contact"
				subTitle={(
					<React.Fragment>
						Have a question or project to discuss?
						<br/>Would love to hear from you!
					</React.Fragment>
				)}
			/>

			<Container>

			</Container>
		</div>
	);
};