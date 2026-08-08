import DiagnosticPage, { metadata as pageMetadata } from '../diagnostic/page';

export const metadata = {
  ...pageMetadata,
  alternates: {
    canonical: "https://aeobility.com.au/diagnostic",
  },
};

export default function AlternateAuditPage() {
  return <DiagnosticPage />;
}
