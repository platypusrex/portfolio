import React from 'react';
import { compose, withHandlers } from "recompose";
import { AppContext } from "../shared/containers/LayoutProvider";
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import { LinkButton } from "../shared/components/LinkButton";
import { Paragraph } from "../shared/components/Paragraph";
import { withRouter } from 'react-router-dom';
import arrow from '../assets/rotated-right-arrow.svg';
import { scrollTo } from "../shared/utils/scrollTo";

const paragraphs = {
	first: 'I\'m a front end engineer and full stack web developer with a passion for building cool\n' +
		'things. I love building useful, usable, well-constructed websites and applications; working with great\n' +
		'people; and constantly learning new things.',
	second: 'I am a former tennis teaching professional and have also worked as a jazz musician in the Charleston area.\n' +
		'When I\'m not fully immersed in my work or side projects, you can find me picking and playing my collection\n' +
		'of instruments, wrenching/riding my 1969 Honda cb350, or out in the water trying to catch a wave or two.\n' +
		'As a true lover of the outdoors and travel, I try to find time to explore my local surroundings and the\n' +
		'world as much as time permits.',
	third: 'I want to be involved in projects that I can be proud of, work with amazing and passionate people, and advance my\n' +
		'development career. I see teamwork, open communication, and compassion as key values for building\n' +
		'successful products. I realize that adaptability, curiosity, and humility are the most\n' +
		'important qualities for succeeding in the tech industry and life in general.'
};

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
				title="Frank G. Cooke III"
				subTitle={(
					<React.Fragment>
						Front End Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Charleston, SC
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
								onClick={() => window.open('https://github.com/platypusrex')}
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