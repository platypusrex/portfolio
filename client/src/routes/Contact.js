import React from 'react';
import { compose, withHandlers } from "recompose";
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import { Paragraph } from "../shared/components/Paragraph";
import { SocialLink } from "../shared/components/SocialLink";
import { Button } from "../shared/components/Button";
import { withState } from "../shared/containers/withState";
import { Input } from "../shared/components/Input";
import { sendEmail } from "../api/sendEmail";
import { validateFormFields } from "../shared/utils/validateFormFields";
import { myEmail, myLocation, myNumber, socialLinks } from "../shared/constants/appConstants";
import swal from 'sweetalert';

const initialState = {
	name: '',
	email: '',
	message: '',
	isSubmitting: false,
	errors: {}
};

export const ContactComponent = (props) => {
	const {state, setState} = props;

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

			<Container className="contact__content">
				<div className="contact__content-wrapper grid">
					<div className="col-4_md-5_sm-12">
						<div className="contact__contact-info-wrapper flex-container column">
							<div className="contact__contact-info flex-container column">
								<Paragraph className="contact__contact-info-title" noMargin>Contact info:</Paragraph>
								<Paragraph noMargin>{myEmail.display}</Paragraph>
								<Paragraph noMargin>{myNumber.display}</Paragraph>
								<Paragraph noMargin>{myLocation}</Paragraph>
							</div>
							<div className="contact__social-link-wrapper flex-container center-row-vertical">
								<SocialLink
									url={myEmail.link}
									icon="ti-email"
									style={{marginRight: '12px'}}
								/>
								<SocialLink
									url={socialLinks.linkedin}
									icon="ti-linkedin"
									style={{marginRight: '12px'}}
								/>
								<SocialLink
									url={socialLinks.github}
									icon="ti-github"
								/>
							</div>
						</div>
					</div>

					<div className="col-8_md-7_sm-12">
						<div className="flex-container" style={{marginBottom: '20px'}}>
							<Input
								placeholder="Your name *"
								value={state.name}
								onChange={name => setState(ss => ({...ss, name}))}
								onFocus={props.handleInputFocus}
								error={state.errors.name}
							/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px'}}>
							<Input
								placeholder="Your email *"
								type="email"
								value={state.email}
								onChange={email => setState(ss => ({...ss, email}))}
								onFocus={props.handleInputFocus}
								error={state.errors.email}
							/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px'}}>
							<Input
								placeholder="Your message *"
								textArea
								value={state.message}
								onChange={message => setState(ss => ({...ss, message}))}
								onFocus={props.handleInputFocus}
								error={state.errors.message}
							/>
						</div>

						<div className="flex-container" style={{marginBottom: '20px', float: 'right'}}>
							<Button loading={state.isSubmitting} onClick={props.handleSendEmail}>Send Message</Button>
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
		handleInputFocus: (props) => () => props.setState(ss => ({...ss, errors: {}})),
		handleSendEmail: (props) => async () => {
			const {setState} = props;
			setState(ss => ({...ss, isSubmitting: true}));

			const {name, email, message} = props.state;
			const requestBody = {name, email, message};

			const formValues = [{name}, {email}, {message}];
			const formErrors = validateFormFields(formValues);

			if (Object.keys(formErrors).length) {
				setState(ss => ({...ss, isSubmitting: false, errors: formErrors}));
				return;
			}

			try {
				await sendEmail(requestBody);
				setState(initialState);
				swal({
					title: 'Message sent!',
					text: `I'll get back with you as soon as I can!`,
					icon: 'success',
				});
			} catch (err) {
				setState(initialState);
				swal({
					title: 'Error!',
					text: 'Looks like something went wrong.',
					icon: 'error',
				});
			}
		}
	})
)(ContactComponent);