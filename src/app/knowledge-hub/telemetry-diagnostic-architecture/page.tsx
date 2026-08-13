import TelemetryDiagnosticArchitectureArticlePage, { metadata as pageMetadata } from '../articles/telemetry-diagnostic-architecture/page';

export const metadata = {
  ...pageMetadata,
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/telemetry-diagnostic-architecture",
  },
};

export default function DirectTelemetryArchitectureArticlePage() {
  return <TelemetryDiagnosticArchitectureArticlePage />;
}
