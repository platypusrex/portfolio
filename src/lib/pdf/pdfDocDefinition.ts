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
const styles = {
  headerTitle: {
    color: 'cornflowerblue',
    fontSize: 30,
    lineHeight: 1,
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
    fontSize: 9,
    color: '#6a6a6a',
  },
  experienceDescription: {
    fontSize: 12,
  },
  experienceList: {
    fontSize: 11,
  },
  educationDescription: {
    fontSize: 11,
    margin: [0, 5, 0, 0],
  },
};

const resumeSection = (sectionTitle: string, sectionContent: Column): ContentColumns => {
  return {
    columns: [
      {
        width: 100,
        style: styles.sectionTitle,
        text: sectionTitle.toUpperCase(),
      },
      // eslint-disable-next-line
      // @ts-expect-error
      ...sectionContent,
    ],
    columnGap: 10,
  };
};

const generateSectionHeading = (title: string, subTitle: string) => {
  return [
    {
      style: styles.experienceTitle,
      text: title.toUpperCase(),
    },
    {
      style: styles.experienceSubtitle,
      text: '\t' + subTitle.toUpperCase(),
    },
  ];
};

const generateDescription = (description: string) => ({
  style: styles.experienceDescription,
  text: description,
});

const generateDescriptionList = (descriptionList?: string[]) => {
  const descCopy = descriptionList && descriptionList.length ? [...descriptionList] : [];
  return descCopy.length ? { style: styles.experienceList, ul: descCopy } : '';
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
        stack: [
          {
            style: styles.headerTitle,
            text: fullName || '',
          },
          {
            text: 'Full Stack Engineer'.toUpperCase(),
          },
        ],
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
        {
          stack: [
            generateSectionHeading(content?.heading || '', content?.subHeading || ''),
            newLine,
            generateDescription(content?.description || ''),
            newLine,
            generateDescriptionList(content?.descriptionList?.map((desc) => desc || '')),
          ],
        },
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
        {
          stack: [
            generateSectionHeading(content?.heading || '', content?.subHeading || ''),
            { text: content?.description || '', style: styles.educationDescription },
          ],
        },
      ];
    }) || [];

  return contentList?.map((content, i) => {
    const title = i < 1 ? sectionTitle : '';
    // eslint-disable-next-line
    // @ts-expect-error
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
    defaultStyle: {
      font: 'Montserrat',
      lineHeight: 1.25,
    },
    content: [
      pdfHeader(contactInfo),
      newLine,
      resumeSection(summarySection.heading, summarySection.content),
      newLine,
      resumeSection(skillsetSection.heading, skillsetSection.content),
      newLine,
      ...workExperienceSection,
      newLine,
      ...educationSection,
    ],
  };
};
