import {
	summary,
	skills,
	fathomRealty,
	interapptive,
	massagebook,
	boomtown,
	tridentTechOne,
	collegeOfCharleston,
	tridentTechTwo,
	fathomList,
	iaList,
	mbList,
	btList
} from "./resumeConstants";
import { myEmail, myLocation, myName, myNumber } from "./appConstants";

const info = {title: 'Frank Cooke Resume'};
const pageMargins = [30, 30, 30, 30];
const newLine = '\n';
const sectionDivider = '\n\n';
const styles = {
	headerTitle: {
		fontSize: 30
	},
	headerContact: {
		fontSize: 10
	},
	sectionTitle: {
		bold: true,
		fontSize: 14
	},
	experienceTitle: {
		bold: true
	},
	experienceSubtitle: {
		fontSize: 10
	}
};

const header = {
	columns: [
		{
			style: styles.headerTitle,
			text: myName
		},
		{
			alignment: 'right',
			style: styles.headerContact,
			stack: [
				myEmail.display,
				myNumber.display,
				myLocation
			]
		}
	]
};

const resumeSection = (sectionTitle, sectionContent) => {

	return {
		alignment: 'justify',
		columns: [
			{
				width: 100,
				style: styles.sectionTitle,
				text: sectionTitle.toUpperCase()
			},
			...sectionContent
		]
	}
};

const summaryContent = [{text: summary}];

const skillsContent = () => {
	let ulOne = [];
	let ulTwo = [];
	let ulThree = [];

	skills.forEach((skill, i) => {
		if (i < 10) {
			ulOne.push(skill);
		} else if (i > 9 && i < 20) {
			ulTwo.push(skill);
		} else {
			ulThree.push(skill);
		}
	});

	return [
		{ul: ulOne},
		{ul: ulTwo},
		{ul: ulThree}
	];
};

const experienceContentGenerator = (title, subTitle, summary, description) => {
	const list = description ? {style: {fontSize: 11}, ul: description} : '';

	return {
		stack: [
			{
				text: [
					{
						style: styles.experienceTitle,
						text: title.toUpperCase()
					},
					{
						style: styles.experienceSubtitle,
						text: '\t' + subTitle.toUpperCase()
					}
				]
			},
			'\n',
			{
				text: summary
			},
			'\n',
			list
		]
	}
};

const fathomExperience = [
	experienceContentGenerator(
		fathomRealty.companyName,
		fathomRealty.title,
		fathomRealty.summary,
		fathomList
	)
];

const interapptiveExperience = [
	experienceContentGenerator(
		interapptive.companyName,
		interapptive.title,
		interapptive.summary,
		iaList
	)
];

const massagebookExperience =	[
	experienceContentGenerator(
		massagebook.companyName,
		massagebook.title,
		massagebook.summary,
		mbList
	)
];
const boomtownExperience = [
	experienceContentGenerator(
		boomtown.companyName,
		boomtown.title,
		boomtown.summary,
		btList
	)
];

const educationOne = [
	experienceContentGenerator(
		tridentTechOne.title,
		tridentTechOne.subTitle,
		tridentTechOne.summary
	)
];

const educationTwo = [
	experienceContentGenerator(
		collegeOfCharleston.title,
		collegeOfCharleston.subTitle,
		collegeOfCharleston.summary
	)
];

const educationThree = [
	experienceContentGenerator(
		tridentTechTwo.title,
		tridentTechTwo.subTitle,
		tridentTechTwo.summary
	)
];

export const resumeDocDefinition = {
	info,
	pageMargins,
	content: [
		header,
		sectionDivider,
		resumeSection('summary', summaryContent),
		sectionDivider,
		resumeSection('skillset', skillsContent()),
		sectionDivider,
		resumeSection('work\nexperience', fathomExperience),
		newLine,
		resumeSection('', interapptiveExperience),
		newLine,
		resumeSection('', massagebookExperience),
		newLine,
		resumeSection('', boomtownExperience),
		sectionDivider,
		resumeSection('education', educationOne),
		newLine,
		resumeSection('', educationTwo),
		newLine,
		resumeSection('', educationThree)
	]
};