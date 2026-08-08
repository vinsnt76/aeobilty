import ContactPage, { metadata as pageMetadata } from '../contact/page';

export const metadata = {
  ...pageMetadata,
  alternates: {
    canonical: "https://aeobility.com.au/contact",
  },
};

export default function AlternateContactPage() {
  return <ContactPage />;
}
