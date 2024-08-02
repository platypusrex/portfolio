type PageTitleKey = 'about' | 'contact' | 'resume' | 'projects';
type PageTitle = Record<PageTitleKey, string>;

const basePageTitle = 'Frank Cooke Developer Portfolio |';

export const pageTitle: PageTitle = {
  about: `${basePageTitle} About page`,
  contact: `${basePageTitle} Contact page`,
  resume: `${basePageTitle} Resume page`,
  projects: `${basePageTitle} Projects page`,
};
