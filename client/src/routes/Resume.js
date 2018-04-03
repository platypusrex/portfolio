import React from 'react';
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import { Paragraph } from "../shared/components/Paragraph";
import { Icon } from "../shared/components/Icon";
import { ResumeExperience } from "./ResumeExperience";
import {
	boomtown,
	collegeOfCharleston,
	fathomRealty,
	interapptive,
	massagebook,
	tridentTechOne,
	tridentTechTwo,
	skills, summary
} from "../shared/constants/resumeConstants";
import { resumeDocDefinition } from "../shared/constants/pdfDocDefinition";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const pdfName = 'frank_cooke_resume.pdf';

export const Resume = (props) => {
	const pdfButtons = (
		<React.Fragment>
			<a
				className="resume__pdf-btn"
				title="print"
				onClick={() => pdfMake.createPdf(resumeDocDefinition).print()}
			>
				<Icon className="ti-printer" size={22}/>
			</a>
			<a
				className="resume__pdf-btn"
				title="download"
				onClick={() => pdfMake.createPdf(resumeDocDefinition).download(pdfName)}
			>
				<Icon className="ti-download" size={22}/>
			</a>
		</React.Fragment>
	);

	const headerTitle = (
		<div className="resume__header-title flex-container">
			Frank G. Cooke III
			<div className="resume__header-btns flex-container">
				{pdfButtons}
			</div>
		</div>
	);

	return (
		<div className="resume">
			<PageHeader
				title={headerTitle}
				subTitle={(
					<React.Fragment>
						<a className="resume__link" href="mailto:frankcooke79@gmail.com">frankcooke79@gmail.com</a>
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<a className="resume__link" href="tel:+8433036284">(843) 303-6284</a>
						<br/>Charleston, SC
					</React.Fragment>
				)}
			/>

			<div className="resume__content-pdf-btns">
				{pdfButtons}
			</div>

			<Container>
				<div className="grid">
					<div className="col-12 grid">

						<div className="col-3_md-12">
							<h2 className="resume__section-title">Summary</h2>
						</div>
						<div className="resume_section-column col-9_md-12">
							<Paragraph>
								{summary}
							</Paragraph>
						</div>

						<div className="col-3_md-12">
							<h2 className="resume__section-title">Skillset</h2>
						</div>
						<div className="resume_section-column col-9_md-12">
							<ul className="resume__skills-list">
								{skills.map(skill => <li key={skill} className="resume__skills">{skill}</li>)}
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