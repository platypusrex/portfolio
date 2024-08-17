import { SocialLinkProps, SocialLink } from 'components/SocialLink';
import { ContactInfoFragment, SocialLinkFragment } from 'types/generated';

type ContactInfoProps = {
  contactInfo?: ContactInfoFragment | null;
  socialLinks?: Array<SocialLinkFragment | null> | null;
};

export function ContactInfo({ contactInfo, socialLinks }: ContactInfoProps) {
  return (
    <div className="shadow-input bg-white flex lg:flex-col justify-between lg:justify-start p-4 text-sm md:text-md">
      {contactInfo && (
        <div className="grid gap-1.5">
          <h2 className="font-bold">Contact Info:</h2>
          <a
            className="border-b border-transparent hover:border-b hover:border-solid leading-none w-fit
             hover:border-black block transition-all duration-300 ease-in-out"
            href={`mailto:${contactInfo.email}`}
          >
            {contactInfo.email}
          </a>
          <a
            className="border-b border-transparent hover:border-b hover:border-solid leading-none w-fit
             hover:border-black block transition-all duration-300 ease-in-out"
            href={`tel:${contactInfo.phone}`}
          >
            {contactInfo.phone}
          </a>
          <p className="leading-none">
            {contactInfo.city}, {contactInfo.state}
          </p>
        </div>
      )}
      {socialLinks && (
        <div className="flex gap-3 mt-0 lg:mt-3">
          {socialLinks.map((socialLink, i) => (
            <SocialLink key={i} {...(socialLink as SocialLinkProps)} />
          ))}
        </div>
      )}
    </div>
  );
}
