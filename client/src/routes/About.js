import React from 'react';
import { compose, withHandlers } from "recompose";
import { AppContext } from "../shared/containers/LayoutProvider";
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import { LinkButton } from "../shared/components/LinkButton";
import { Paragraph } from "../shared/components/Paragraph";
import { withRouter } from 'react-router-dom';
import { scrollTo } from "../shared/utils/scrollTo";
import { paragraphs } from "../shared/constants/aboutConstants";
import { myLocation, myName, socialLinks } from "../shared/constants/appConstants";
import arrow from '../assets/rotated-right-arrow.svg';

export const AboutComponent = (props) => {
	return (
		<div className="about">
			<div className="about__jumbotron">
				<div className="about__jumbotron-text-wrapper">
					<span className="about__jumbotron-text">Hello world!</span>
					<div>
						<a onClick={props.handleScrollToAbout} title="Click me!">
							<img className="about__jumbotron-arrow" src={arrow} alt=""/>
						</a>
					</div>
				</div>
			</div>

			<PageHeader
				title={myName}
				subTitle={(
					<React.Fragment>
						Web Developer&nbsp;&nbsp;|&nbsp;&nbsp;{myLocation}
						<br/>Helping build the web one pixel at a time
					</React.Fragment>
				)}
			/>

			<Container className="about__content">
				<div className="grid">
					<div className="col_md-last">
						<Paragraph size="lg">{paragraphs.first}</Paragraph>
						<Paragraph size="lg">{paragraphs.second}</Paragraph>
						<Paragraph size="lg">{paragraphs.third}</Paragraph>
					</div>

					<div className="col-3-middle_md-12">
						<div className="about__link-button-wrapper flex-container column">
							<AppContext.Consumer>
								{({actions}) => (
									<LinkButton
										title="Resume"
										subTitle="View resume"
										icon="ti-file"
										onClick={() => props.handlerNavToResumePage(actions)}
									/>
								)}
							</AppContext.Consumer>

							<LinkButton
								title="Github"
								subTitle="View profile"
								icon="ti-github"
								onClick={() => window.open(socialLinks.github)}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export const About = compose(
	withRouter,
	withHandlers({
		handlerNavToResumePage: (props) => (actions) => {
			actions.setActiveMenuItem(null);
			props.history.push('/resume')
		},
		handleScrollToAbout: (props) => () => {
			scrollTo('page-header-cmp', 250);
		}
	})
)(AboutComponent);