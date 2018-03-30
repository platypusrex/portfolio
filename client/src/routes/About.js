import React from 'react';
import { compose } from "recompose";
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import { LinkButton } from "../shared/components/LinkButton";
import { Paragraph } from "../shared/components/Paragraph";
import { withRouter } from 'react-router-dom';

const paragraphs = {
	first: 'I\'m a front end engineer and full stack web developer with a passion for building cool\n' +
		'things. I love building useful, usable, well-constructed websites and applications; working with great\n' +
		'people; and constantly learning new things.',
	second: 'I am a former tennis teaching professional and have also worked as a jazz musician in the Charleston area.\n' +
		'When I\'m not fully immersed in my work or side projects, you can find me picking and playing my collection\n' +
		'of instruments, wrenching/riding my 1969 Honda cb350, or out in the water trying to catch a wave or two.\n' +
		'As a true lover of the outdoors and travel, I try to find time to explore my local surroundings and the\n' +
		'world as much as time permits.',
	third: 'I want to be involved in projects that I can be proud of, work with amazing people, and advance my\n' +
		'development career. I see teamwork, open communication, and compassion as key values for building\n' +
		'successful products. I realise that adaptability, curiosity, and humility are the most\n' +
		'important qualities for succeeding in the tech industry.'
};

export const AboutComponent = (props) => {
	return (
		<div className="about">
			<div className="about__jumbotron"/>

			<Container className="about__content">
				<PageHeader
					title="Frank G. Cooke III"
					subTitle={(
						<React.Fragment>
							Front End Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Charleston, SC
							<br/>Helping build the web one pixel at a time
						</React.Fragment>
					)}
				/>

				<div className="grid">
					<div className="col_md-last">
						<Paragraph text={paragraphs.first}/>
						<Paragraph text={paragraphs.second}/>
						<Paragraph text={paragraphs.third}/>
					</div>

					<div className="col-3-middle_md-12">
						<div className="about__link-button-wrapper flex-container column">
							<LinkButton
								title="Resume"
								subTitle="View resume"
								icon="ti-file"
								onClick={() => props.history.push('/resume')}
							/>

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
	withRouter
)(AboutComponent);