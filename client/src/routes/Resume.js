import React from 'react';
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import { Paragraph } from "../shared/components/Paragraph";
import { ResumeExperience } from "./ResumeExperience";
import {
	boomtown,
	collegeOfCharleston,
	fathomRealty,
	interapptive,
	massagebook,
	tridentTechOne,
	tridentTechTwo,
	skills
} from "../shared/constants/resumeConstants";

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
				<div className="grid">
					<div className="col-12 grid">

						<div className="col-3_md-12">
							<h2 className="resume__section-title">Summary</h2>
						</div>
						<div className="resume_section-column col-9_md-12">
							<Paragraph>
								I am a front end engineer with a special interest in full stack web development. I have experience
								building mobile and web applications, from api integrations to sophisticated css animations. I am
								trustworthy, ethical, and committed to overcoming new challenges and learning new things. I love to
								build useful, usable, well-constructed web sites and applications and strive to work alongside great
								people who challenge me to grow as a developer and engineer.
							</Paragraph>
						</div>

						<div className="col-3_md-12">
							<h2 className="resume__section-title">Skillset</h2>
						</div>
						<div className="resume_section-column col-9_md-12">
							<ul className="resume__skills-list">
								{skills.map(skill => <li className="resume__skills">{skill}</li>)}
							</ul>
						</div>

						<div className="col-3_md-12">
							<h2 className="resume__section-title">
								Work<br/>Experience
							</h2>
						</div>
						<div className="resume_section-column col-9_md-12">
							<ResumeExperience
								title={fathomRealty.companyName}
								subTitle={fathomRealty.title}
								summary={fathomRealty.summary}
								description={fathomRealty.description}
							/>

							<ResumeExperience
								title={interapptive.companyName}
								subTitle={interapptive.title}
								summary={interapptive.summary}
								description={interapptive.description}
							/>

							<ResumeExperience
								title={massagebook.companyName}
								subTitle={massagebook.title}
								summary={massagebook.summary}
								description={massagebook.description}
							/>

							<ResumeExperience
								title={boomtown.companyName}
								subTitle={boomtown.title}
								summary={boomtown.summary}
								description={boomtown.description}
							/>
						</div>

						<div className="col-3_md-12">
							<h2 className="resume__section-title">Education</h2>
						</div>
						<div className="resume_section-column col-9_md-12">
							<ResumeExperience
								title={tridentTechOne.title}
								subTitle={tridentTechOne.subTitle}
								summary={tridentTechOne.summary}
							/>

							<ResumeExperience
								title={collegeOfCharleston.title}
								subTitle={collegeOfCharleston.subTitle}
								summary={collegeOfCharleston.summary}
							/>

							<ResumeExperience
								title={tridentTechTwo.title}
								subTitle={tridentTechTwo.subTitle}
								summary={tridentTechTwo.summary}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};