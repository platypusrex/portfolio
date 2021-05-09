import {
  Column,
  ContentColumns,
  Margins,
  TDocumentDefinitions,
  TDocumentInformation,
} from 'pdfmake/interfaces';
import { PageFieldsFragment } from 'types/generated';

const info: TDocumentInformation = { title: 'Frank Cooke Resume' };
const pageMargins: Margins = [30, 30, 30, 30];
const newLine = '\n';
const sectionDivider = '\n\n';
const styles = {
  headerTitle: {
    fontSize: 30,
  },
  headerContact: {
    fontSize: 10,
  },
  sectionTitle: {
    bold: true,
    fontSize: 14,
  },
  experienceTitle: {
    bold: true,
  },
  experienceSubtitle: {
    fontSize: 10,
  },
};

const resumeSection = (sectionTitle: string, sectionContent: Column): ContentColumns => {
  return {
    alignment: 'justify',
    columns: [
      {
        width: 100,
        style: styles.sectionTitle,
        text: sectionTitle.toUpperCase(),
      },
      // @ts-ignore
      ...sectionContent,
    ],
  };
};

const experienceContentGenerator = (
  title: string,
  subTitle: string,
  summary: string,
  description?: string[]
) => {
  const descCopy = description && description.length ? [...description] : [];
  const list = descCopy.length ? { style: { fontSize: 11 }, ul: descCopy } : '';

  return {
    stack: [
      {
        text: [
          {
            style: styles.experienceTitle,
            text: title.toUpperCase(),
          },
          {
            style: styles.experienceSubtitle,
            text: '\t' + subTitle.toUpperCase(),
          },
        ],
      },
      '\n',
      {
        text: summary,
      },
      '\n',
      list,
    ],
  };
};

const getSectionByName = (
  name: 'summary' | 'skillset' | 'workExperience' | 'education',
  resumeSections: PageFieldsFragment['resumeSectionsCollection']
) => resumeSections?.items.find((resumeSection) => name === resumeSection?.name);

const pdfHeader = (contactInfo: PageFieldsFragment['contactInfo']): ContentColumns => {
  const { fullName, email, phone, city, state } = contactInfo || {};
  return {
    columns: [
      {
        style: styles.headerTitle,
        text: fullName || '',
      },
      {
        alignment: 'right',
        style: styles.headerContact,
        stack: [email || '', phone || '', `${city}, ${state}`],
      },
    ],
  };
};

const getSummarySection = (resumeSections: PageFieldsFragment['resumeSectionsCollection']) => {
  const summarySection = getSectionByName('summary', resumeSections);
  const content = summarySection?.contentCollection?.items[0];
  return {
    heading: summarySection?.heading || '',
    content: [{ text: content?.description || '' }],
  };
};

const getSkillsetSection = (resumeSections: PageFieldsFragment['resumeSectionsCollection']) => {
  const skillsetSection = getSectionByName('skillset', resumeSections);
  const content = skillsetSection?.contentCollection?.items[0];
  const ulOne: string[] = [];
  const ulTwo: string[] = [];
  const ulThree: string[] = [];

  content?.descriptionList?.forEach((skill, i) => {
    const currentSkill = skill || '';
    if (i < 7) {
      ulOne.push(currentSkill);
    } else if (i > 6 && i < 14) {
      ulTwo.push(currentSkill);
    } else {
      ulThree.push(currentSkill);
    }
  });

  return {
    heading: skillsetSection?.heading || '',
    content: [{ ul: ulOne }, { ul: ulTwo }, { ul: ulThree }],
  };
};

const getWorkExperienceSection = (
  resumeSections: PageFieldsFragment['resumeSectionsCollection']
) => {
  const workExperienceSection = getSectionByName('workExperience', resumeSections);
  const sectionTitle = workExperienceSection?.heading || '';
  const contentList =
    workExperienceSection?.contentCollection?.items?.map((content) => {
      return [
        experienceContentGenerator(
          content?.heading || '',
          content?.subHeading || '',
          content?.description || '',
          content?.descriptionList?.map((desc) => desc || '')
        ),
      ];
    }) || [];

  return contentList?.map((content, i) => {
    const title = i < 1 ? sectionTitle : '';
    return [resumeSection(title, content), newLine];
  });
};

const getEducationSection = (resumeSections: PageFieldsFragment['resumeSectionsCollection']) => {
  const educationSection = getSectionByName('education', resumeSections);
  const sectionTitle = educationSection?.heading || '';
  const contentList =
    educationSection?.contentCollection?.items?.map((content) => {
      return [
        experienceContentGenerator(
          content?.heading || '',
          content?.subHeading || '',
          content?.description || ''
        ),
      ];
    }) || [];

  return contentList?.map((content, i) => {
    const title = i < 1 ? sectionTitle : '';
    return [resumeSection(title, content), newLine];
  });
};

export const resumeDocDefinition = (
  resumeSections: PageFieldsFragment['resumeSectionsCollection'],
  contactInfo: PageFieldsFragment['contactInfo']
): TDocumentDefinitions => {
  const summarySection = getSummarySection(resumeSections);
  const skillsetSection = getSkillsetSection(resumeSections);
  const workExperienceSection = getWorkExperienceSection(resumeSections);
  const educationSection = getEducationSection(resumeSections);

  return {
    info,
    pageMargins,
    content: [
      pdfHeader(contactInfo),
      sectionDivider,
      resumeSection(summarySection.heading, summarySection.content),
      sectionDivider,
      resumeSection(skillsetSection.heading, skillsetSection.content),
      sectionDivider,
      ...workExperienceSection,
      sectionDivider,
      ...educationSection,
    ],
  };
};
