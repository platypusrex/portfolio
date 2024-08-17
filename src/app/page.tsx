import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { getPage } from 'actions/getPage';
import { Hero } from 'components/Hero';
import { LinkButton } from 'components/LinkButton';
import { PageHeader } from 'components/PageHeader';
import { ScrollButton } from 'components/ScrollButton';
import { AnimatedText } from 'components/AnimatedText';
import { Arrow } from 'components/Arrow';
import me_mobile from 'public/images/me.png';

const contentOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-[18px] text-gray-700 mb-5">{children}</p>
    ),
  },
};

const ABOUT_PAGE_ID = '6iA2yPjBR8dYsO6YFwJuu3';

export default async function AboutPage() {
  const { content, pageHeader } = await getPage(ABOUT_PAGE_ID);

  const pageContent = [
    <div key="col-1" className="col-span-5 lg:col-span-4 order-2 lg:order-1">
      {documentToReactComponents(content!.json, contentOptions)}
    </div>,
    <div
      key="col-2"
      className="flex lg:flex-col items-center justify-center col-span-5 lg:col-span-1 gap-6 order-1"
    >
      <LinkButton title="Resume" subTitle="view resume" icon="file" href="/resume" />
      <LinkButton
        title="Github"
        subTitle="view profile"
        icon="github"
        href="https://github.com/platypusrex"
        external
      />
    </div>,
  ];
  return (
    <>
      <ScrollButton scrollElementId="about-content">
        <AnimatedText className="transform rotate-[-20deg] mt-[40px] mx-[25px] leading-[25px] text-white text-3xl">
          Hello world!
        </AnimatedText>
        <Arrow />
      </ScrollButton>
      <Hero alt="about-hero-img" src={{ mobile: me_mobile, desktop: me_mobile }} />
      <div className="h-screen" id="about-content">
        <PageHeader {...pageHeader} />
        <div
          className="grid grid-cols-[repeat(5,1fr)] gap-6 lg:gap-0 py-0 px-[20px]
            sm:px-[25px] sm:py-0 md:px-[35px] lg:pl-[150px] lg:pr-[50px]"
        >
          {pageContent}
        </div>
      </div>
    </>
  );
}
