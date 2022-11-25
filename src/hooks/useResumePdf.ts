import pdfMake from 'pdfmake/build/pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { useEffect, useState } from 'react';
import { PageFieldsFragment } from 'types/generated';
import { resumeDocDefinition } from 'lib/pdf/pdfDocDefinition';

const fonts = () => ({
  Montserrat: {
    normal: `${window.location.origin}/fonts/Montserrat-Regular.ttf`,
    bold: `${window.location.origin}/fonts/Montserrat-Bold.ttf`,
    italics: `${window.location.origin}/fonts/Montserrat-Italic.ttf`,
  },
});
const PDF_NAME = 'frank_cooke_resume.pdf';

export interface UseResumePdf {
  handlePrintPdf: () => void;
  handleDownloadPdf: () => void;
}

export const useResumePdf = (
  resumeSections: PageFieldsFragment['resumeSectionsCollection'],
  contactInfo: PageFieldsFragment['contactInfo']
): UseResumePdf => {
  const [docDefinition, setDocDefinition] = useState<TDocumentDefinitions | null>(null);

  useEffect(() => {
    const doc = resumeDocDefinition(resumeSections, contactInfo);
    setDocDefinition(doc);
  }, [contactInfo, resumeSections]);

  const handlePrintPdf = () => {
    docDefinition && pdfMake.createPdf(docDefinition, undefined, fonts()).print();
  };

  const handleDownloadPdf = () => {
    docDefinition && pdfMake.createPdf(docDefinition, undefined, fonts()).download(PDF_NAME);
  };

  return { handlePrintPdf, handleDownloadPdf };
};
