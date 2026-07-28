import StructuredDataQueryFanOutArticlePage, { metadata as pageMetadata } from '../articles/structured-data-query-fan-out/page';

export const metadata = {
  ...pageMetadata,
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/structured-data-query-fan-out",
  },
};

export default function DirectFanOutArticlePage() {
  return <StructuredDataQueryFanOutArticlePage />;
}
