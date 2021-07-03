type PageTitleKey = 'about' | 'contact' | 'resume';
type PageTitle = Record<PageTitleKey, string>;

const basePageTitle = 'Frank Cooke Developer Portfolio |';

export const pageTitle: PageTitle = {
  about: `${basePageTitle}About page`,
  contact: `${basePageTitle}Contact page`,
  resume: `${basePageTitle}Resume page`,
};
