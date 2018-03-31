import React from 'react';
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import {Paragraph} from "../shared/components/Paragraph";
import { SocialLink } from "../shared/components/SocialLink";
import { Button } from "../shared/components/Button";

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
				<div className="grid">
					<div className="col-4_md-5_sm-12">
						<Paragraph noMargin>frankcooke79@gmail.com</Paragraph>
						<Paragraph noMargin>(843) 303-6284</Paragraph>
						<Paragraph noMargin>Charleston, SC</Paragraph>

						<div className="contact__social-link-wrapper flex-container center-row-vertical" style={{marginTop: '5px'}}>
							<SocialLink icon="ti-linkedin" style={{marginRight: '12px'}}/>
							<SocialLink icon="ti-github"/>
						</div>
					</div>

					<div className="col-8_md-7_sm-12">
						<div className="flex-container" style={{marginBottom: '20px'}}>
							<input placeholder="Your Name" style={{width: '100%', padding: '15px', borderRadius: '3px', border: '1px solid'}}/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px'}}>
							<input placeholder="Your Email" style={{width: '100%', padding: '15px', borderRadius: '3px', border: '1px solid'}}/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px'}}>
							<textarea placeholder="Your Message" style={{width: '100%', padding: '15px', borderRadius: '3px', border: '1px solid'}} rows={15}/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px', float: 'right'}}>
							<Button>Send Message</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};