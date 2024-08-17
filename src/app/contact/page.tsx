import Image from 'next/image';
import { getPage } from 'actions/getPage';
import { PageHeader } from 'components/PageHeader';
import { ContactForm } from 'modules/contact/ContactForm';
import { ContactInfo } from 'modules/contact/ContactInfo';
import 'react-toastify/dist/ReactToastify.css';

const CONTACT_PAGE_ID = '6fWZPk4ERnFuZc3yMFqrSY';

export default async function ContactPage() {
  const { socialLinksCollection, contactInfo, pageHeader, hero } = await getPage(CONTACT_PAGE_ID);

  return (
    <div className="relative grid h-full grid-rows-[min-content_1fr]">
      {hero?.url && (
        <Image
          className="blur-[8px]"
          alt="Contact form background"
          src={hero.url}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      )}
      <PageHeader {...pageHeader} />
      <div
        className="p-3 md:p-6 mx-0 md:mx-10 mb-6 before:absolute before:bg-gray-100
       before:bg-opacity-[0.35] before:inset-0 before:z-[2]"
      >
        <div className="grid grid-cols-5 gap-6">
          <section className="col-span-5 lg:col-span-2 z-10">
            <ContactInfo socialLinks={socialLinksCollection?.items} contactInfo={contactInfo} />
          </section>
          <section className="col-span-5 lg:col-span-3 z-10">
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
