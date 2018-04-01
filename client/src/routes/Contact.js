import React from 'react';
import { compose, withHandlers } from "recompose";
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import { Paragraph } from "../shared/components/Paragraph";
import { SocialLink } from "../shared/components/SocialLink";
import { Button } from "../shared/components/Button";
import { withState } from "../shared/containers/withState";
import { Input } from "../shared/components/Input";
import robot from '../assets/badass_robot.jpg';
import {sendEmail} from "../api/sendEmail";

const initialState = {
	name: '',
	email: '',
	message: '',
};

export const ContactComponent = (props) => {
	const {state, setState} = props;

	return (
		<div className="contact">

			<div className="contact__bg-image-wrapper">
				<img className="contact__bg-image" src={robot} alt=""/>
			</div>

			<PageHeader
				title="Contact"
				subTitle={(
					<React.Fragment>
						Have a question or project to discuss?
						<br/>Would love to hear from you!
					</React.Fragment>
				)}
			/>

			<Container className="contact__content">
				<div className="contact__content-wrapper grid">
					<div className="col-4_md-5_sm-12">
						<div className="contact__contact-info-wrapper flex-container column">
							<div className="contact__contact-info flex-container column">
								<Paragraph className="contact__contact-info-title" noMargin>Contact info:</Paragraph>
								<Paragraph noMargin>frankcooke79@gmail.com</Paragraph>
								<Paragraph noMargin>(843) 303-6284</Paragraph>
								<Paragraph noMargin>Charleston, SC</Paragraph>
							</div>
							<div className="contact__social-link-wrapper flex-container center-row-vertical" style={{marginTop: '5px'}}>
								<SocialLink
									url="https://www.linkedin.com/in/frank-cooke-82562852/"
									icon="ti-linkedin"
									style={{marginRight: '12px'}}
								/>
								<SocialLink url="https://github.com/platypusrex" icon="ti-github"/>
							</div>
						</div>
					</div>

					<div className="col-8_md-7_sm-12">
						<div className="flex-container" style={{marginBottom: '20px'}}>
							<Input
								placeholder="Your name"
								value={state.name}
								onChange={name => setState(ss => ({...ss, name}))}
							/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px'}}>
							<Input
								placeholder="Your email"
								type="email"
								value={state.email}
								onChange={email => setState(ss => ({...ss, email}))}
							/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px'}}>
							<Input
								placeholder="Your message"
								textArea
								value={state.message}
								onChange={message => setState(ss => ({...ss, message}))}
							/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px', float: 'right'}}>
							<Button onClick={props.handleSendEmail}>Send Message</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export const Contact = compose(
	withState(initialState),
	withHandlers({
		handleSendEmail: (props) => async () => {
			console.log(props.state);
			const {name, email, message} = props.state;
			const requestBody = {name, email, message};

			const response = await sendEmail(requestBody);
			console.log(response);
		}
	})
)(ContactComponent);