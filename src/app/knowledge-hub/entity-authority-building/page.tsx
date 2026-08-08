import EntityAuthorityArticlePage, { metadata as pageMetadata } from '../articles/entity-authority-building/page';

export const metadata = {
  ...pageMetadata,
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
  },
};

export default function AlternateEntityAuthorityPage() {
  return <EntityAuthorityArticlePage />;
}
