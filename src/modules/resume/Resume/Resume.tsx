import React from 'react';
import { ResumeSectionContentFragment, ResumeSectionFragment } from 'types/generated';

export interface ResumeProps {
  resumeSection: ResumeSectionFragment;
}

export const Resume: React.FC<ResumeProps> = ({
  resumeSection: { name, heading, contentCollection },
}) => {
  const sectionContent = contentCollection?.items as ResumeSectionContentFragment[];
  const isSkillSetSection = name === 'skillset';

  return (
    <div className="parent grid grid-cols-[repeat(12,1fr)] gap-y-6 md:gap-x-6 [&:not(:last-child)_hr]:block">
      <div className="col-span-12 lg:col-span-3">
        <h2 className="text-2xl font-bold">{heading}</h2>
      </div>
      <div className="col-span-12 lg:col-span-9">
        {sectionContent?.map(({ heading, subHeading, description, descriptionList }) => (
          <div className="mb-6" key={subHeading}>
            {heading && subHeading && (
              <div className="flex flex-col justify-between md:justify-start items-start mb-4">
                <h3 className="text-lg mr-4 font-bold">{heading}</h3>
                <p className="text-xs text-gray-600">{subHeading}</p>
              </div>
            )}
            {description && <p className="mb-4">{description}</p>}
            {descriptionList && (
              <ul className={`ml-4 ${isSkillSetSection ? 'columns-2 md:columns-3' : ''}`}>
                {descriptionList?.map((desc) => (
                  <li
                    key={desc}
                    className={`list-[square] ${isSkillSetSection ? 'text-base' : 'text-[14px] pb-2'}`}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <hr className="hidden opacity-[0.6] rounded-0 border-inherit border-solid border-b-[1px] w-full mb-6" />
      </div>
    </div>
  );
};
