import { Metadata } from 'next';
import { getPage } from 'actions/getPage';
import { IconButton } from 'components/IconButton/IconButton';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { Resume } from 'modules/resume/Resume/Resume';
import { pageMeta } from 'constants/pageMeta';

const RESUME_PAGE_ID = 'FJdbfsztIScwFLQDTstZ4';

export const metadata: Metadata = {
  title: pageMeta.resume.title,
  description: pageMeta.resume.description,
};

export default async function AboutPage() {
  const { pageHeader, resumeSectionsCollection } = await getPage(RESUME_PAGE_ID);

  const extra = (
    <div className="flex gap-1">
      <IconButton icon="printer" />
      <IconButton icon="download" />
    </div>
  );

  return (
    <>
      <PageHeader {...pageHeader} extra={extra} />
      {resumeSectionsCollection?.items && (
        <div className="py-0 px-[20px] md:px-[40px] lg:px-[80px] xl:px-[100px]">
          {resumeSectionsCollection.items.map(
            (resumeSection) =>
              resumeSection && <Resume key={resumeSection.name} resumeSection={resumeSection} />
          )}
        </div>
      )}
    </>
  );
}
