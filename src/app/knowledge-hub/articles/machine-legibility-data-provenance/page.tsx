import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { 
  BookOpen, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Workflow, 
  AlertCircle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Machine Legibility & Data Provenance: Intentional Data Structures | AEObility",
  description: "Why answer engines don't read your website: field notes on provenance, entity reconstruction, and intentional data structures for AI search.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
  },
  openGraph: {
    title: "Machine Legibility & Data Provenance: Intentional Data Structures | AEObility",
    description: "Field notes on machine legibility, reconstructible entity provenance, and intentional data structures for generative answer engines.",
    url: "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
    type: "article",
  },
};

export default function MachineLegibilityDataProvenancePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["TechArticle", "DigitalDocument"],
    "@id": "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
    "name": "Machine Legibility & Data Provenance: Intentional Data Structures",
    "headline": "Why Answer Engines Don't Read Your Website: Field Notes on Provenance",
    "alternativeHeadline": "Machine Legibility & Data Provenance: Intentional Data Structures",
    "description": "Foundational theoretical paper and field notes connecting machine legibility, reconstructible entity provenance, deterministic triples, and intentional data structures for generative search.",
    "url": "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
    "inLanguage": "en-AU",
    "datePublished": "2026-06-28",
    "dateModified": "2026-09-23",
    "version": "1.2.0",
    "articleSection": "AI Search and Entity Architecture",
    "mainEntityOfPage": {
      "@id": "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance"
    },
    "author": {
      "@type": "Person",
      "@id": "https://aeobility.com.au/vince-baker#person",
      "name": "Vinnie Baker",
      "jobTitle": "Founder & Principal Technical Architect"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organisation",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    },
    "about": [
      "Machine legibility",
      "Data provenance",
      "Entity relationship modelling",
      "Answer Engine Optimisation",
      "Generative Engine Optimisation"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-24 w-full space-y-12">
        
        {/* Article Header & Founder Deck */}
        <header className="space-y-6 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-purple/10 border border-aeo-purple/25 text-aeo-purple text-xs font-mono">
            <BookOpen className="w-4 h-4" />
            <span>Ideation Layer &bull; Founder Field Journal</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
              Machine Legibility &amp; Data Provenance: Intentional Data Structures
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 font-serif italic border-l-2 border-aeo-cyan pl-4 py-1 leading-snug">
              Why Answer Engines Don&apos;t Read Your Website: Field Notes on Provenance
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-zinc-400 pt-2">
            <div>By: <strong className="text-white">Vinnie Baker</strong></div>
            <div>Published: <span className="text-zinc-300">28/06/2026</span></div>
            <div>Updated: <span className="text-zinc-300">23 Sep 2026</span></div>
            <div>Version: <span className="text-aeo-cyan font-bold">1.2.0</span></div>
            <div>Classification: <span className="text-aeo-purple font-bold">Foundational Spec</span></div>
          </div>
        </header>

        {/* Calibrated 100-Word Opening Answer Box */}
        <section aria-label="Opening Answer" className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-aeo-cyan/30 p-6 sm:p-8 shadow-2xl shadow-aeo-cyan/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-aeo-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Opening Answer &bull; Machine Salience</span>
            </div>
            <p className="text-base sm:text-lg text-zinc-200 font-serif leading-relaxed">
              Traditional search asks how to get a webpage found through keywords and rankings. Generative search asks a much harder question: how does an answer engine determine what an entity is, what it knows, where it originated, and whether it can be trusted? When systems like ChatGPT, Perplexity, or Google AI Overviews encounter a business, they do not read a site the way a human does. They reconstruct meaning from fragmented relationships, evidence, and provenance. Optimising for AI is not about manufacturing claims; it is about engineering the machine-readable conditions that allow an engine to correctly infer who you are.
            </p>
          </div>
        </section>

        {/* Core Narrative Sections */}
        <article className="space-y-12 font-serif text-base leading-relaxed text-zinc-300">
          
          {/* Section 1: The Misconception */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">01.</span>
              <span>The Misconception: Search Engines Still Experience Brands Like Humans Do</span>
            </h2>
            <p>
              For over twenty years, digital marketing operated on a straightforward premise: write persuasive copy, target search volume, and build links to push a URL up a results page. We assumed that if human visitors found our messaging clear, search crawlers would interpret our authority the same way.
            </p>
            <p className="text-white font-semibold">
              Generative answer engines do not experience a brand that way.
            </p>
            <p>
              They reconstruct one. An answer engine breaks your digital footprint into discrete passages, vector tokens, and contextual relationships. When service pages rely on vague adjectives, corporate jargon, or fragmented claims, models struggle to establish factual confidence. The result is context dilution: the engine either hallucinates attributes, defaults to an established competitor, or omits your business entirely.
            </p>
          </section>

          {/* Section 2: What Is Actually Changing */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">02.</span>
              <span>What Is Actually Changing: From Optimisation to Reconstructible Meaning</span>
            </h2>
            <p>
              The future of search is not simply about optimising content. It is about making meaning reconstructible.
            </p>
            
            {/* Visual Shift Diagram */}
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-5 space-y-3 font-mono text-xs sm:text-sm text-zinc-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-zinc-500 w-28 uppercase font-bold text-[11px]">Legacy SEO:</span>
                <span className="text-zinc-400">[Keyword Query] &rarr; [Match Webpage] &rarr; [Ranked 10 Blue Links]</span>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-aeo-cyan w-28 uppercase font-bold text-[11px]">Generative AEO:</span>
                <span className="text-white font-semibold">[User Prompt] &rarr; [Retrieve Passages] &rarr; [Reconstruct Provenance] &rarr; [Synthesised Answer]</span>
              </div>
            </div>

            <p>
              Answer engines increasingly assemble responses out of three core elements rather than raw documents:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose font-sans">
              <div className="bg-zinc-950/70 border border-white/10 rounded-xl p-4 space-y-2">
                <span className="text-xs font-mono text-aeo-cyan uppercase font-bold">1. The Entity</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  What distinct business, person, or tool is being discussed? Unambiguous disambiguation.
                </p>
              </div>
              <div className="bg-zinc-950/70 border border-white/10 rounded-xl p-4 space-y-2">
                <span className="text-xs font-mono text-aeo-purple uppercase font-bold">2. The Relationships</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  How does this entity connect to specific services, locations, and practitioners?
                </p>
              </div>
              <div className="bg-zinc-950/70 border border-white/10 rounded-xl p-4 space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">3. The Provenance</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Where did this information originate, and is there connecting evidence across third-party sources to corroborate it?
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-aeo-cyan/5 border border-aeo-cyan/20 text-sm text-zinc-200 font-serif italic">
              &ldquo;The strongest generative engine optimisation is not about forcing an AI to repeat your marketing claims. It is about building an entity whose actual provenance naturally yields the correct answer.&rdquo;
            </div>
          </section>

          {/* Section 3: Field Notes: Accidental Provenance of AI Bill */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">03.</span>
              <span>Field Notes: The Accidental Provenance of AI Bill</span>
            </h2>
            
            <p>
              We did not set out to build an AI brand. We set out to understand how AI understands.
            </p>
            <p>
              AEObility began with a question: when an answer engine encounters information, does it extract meaning in ways that resemble how AI processes a data payload?
            </p>
            <p>
              Long before <a href="https://lnkd.in/p/gh9Z-v7X" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline font-semibold">AI Bill</a> became part of our production architecture, there was a private GPT conversation called Vibrational Alignment. It was not a commercial venture; it was simply a place to test how models process identity and retain context. That conversation led to an exploratory chatbot prototype built while working through a Google Cloud Storage tutorial.
            </p>
            <p>
              The prototype persona became <a href="https://www.linkedin.com/in/vince-baker/details/projects/" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline font-semibold">AG Shapeshifter</a>.
            </p>
            <p>
              Later, while building AEObility&apos;s automated diagnostic system, we found that diagnostic scans alone were not enough. The platform required an interactive conversational layer capable of interpreting audit gaps for business owners. AG Shapeshifter was refactored into AI Bill, and Bill became an integral part of our diagnostic runtime.
            </p>

            {/* Sequence Block */}
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-5 text-center font-mono text-xs sm:text-sm text-zinc-300 space-y-2">
              <span className="text-zinc-500 uppercase tracking-widest text-[11px] block">The Architectural Evolution</span>
              <div className="flex flex-wrap items-center justify-center gap-2 font-bold text-white">
                <span className="text-zinc-400">Vibrational Alignment</span>
                <span className="text-aeo-cyan">&rarr;</span>
                <span className="text-zinc-400">AG Shapeshifter</span>
                <span className="text-aeo-cyan">&rarr;</span>
                <span className="text-white">AI Bill</span>
                <span className="text-aeo-cyan">&rarr;</span>
                <span className="text-zinc-300">Diagnostic System</span>
                <span className="text-aeo-cyan">&rarr;</span>
                <span className="text-aeo-cyan">AEObility</span>
              </div>
            </div>

            <p>
              A human conversation became a persona, the persona became a software system, the system became part of a brand, and the brand produced machine-readable signals. When search engines encountered those signals, they began reconstructing the entity accurately.
            </p>

            {/* Technical Receipts and Provenance Artifacts */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
                <span>Primary Technical Receipts &amp; Provenance Artifacts</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose font-mono text-xs">
                <a
                  href="https://notebook.google.com/notebook/d07f8fc9-9b06-4a47-82ad-ef7993048f53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-white/10 hover:border-aeo-cyan/50 transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Primary Research</span>
                    <span className="text-zinc-200 group-hover:text-aeo-cyan transition-colors font-medium">NotebookLM &bull; The Art of Vibrational Alignment</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-aeo-cyan transition-colors" />
                </a>

                <a
                  href="https://vinniebakeraeoinsights.substack.com/p/the-irony-of-trying-to-be-found"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-white/10 hover:border-aeo-cyan/50 transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Architectural Strategy</span>
                    <span className="text-zinc-200 group-hover:text-aeo-cyan transition-colors font-medium">Substack &bull; The Irony of Trying to Be Found</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-aeo-cyan transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/vince-baker/details/projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-white/10 hover:border-aeo-cyan/50 transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Prototype History</span>
                    <span className="text-zinc-200 group-hover:text-aeo-cyan transition-colors font-medium">LinkedIn &bull; AG Shapeshifter Architecture</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-aeo-cyan transition-colors" />
                </a>

                <a
                  href="https://lnkd.in/p/gh9Z-v7X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-white/10 hover:border-aeo-cyan/50 transition-colors flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Production Runtime</span>
                    <span className="text-zinc-200 group-hover:text-aeo-cyan transition-colors font-medium">AI Bill &bull; NLWeb Ingestion &amp; UI</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-aeo-cyan transition-colors" />
                </a>
              </div>
            </div>

            <p className="pt-2 text-sm text-zinc-400">
              This full circle proved our working hypothesis: provenance is not a manufactured story. It is a verifiable chain of evidence that machines can discover and reconstruct.
            </p>
          </section>

          {/* Section 4: A Practical Example: The Perth Allied Health Clinic */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">04.</span>
              <span>A Practical Example: The Perth Allied Health Clinic</span>
            </h2>
            <p>
              Consider a private physiotherapy practice in Subiaco trying to capture local patient queries across conversational search.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose font-sans">
              {/* Content-Only Approach */}
              <div className="bg-zinc-950 border border-red-500/20 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase">
                  <XCircle className="w-4 h-4" />
                  <span>The Content-Only Approach</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-serif">
                  The clinic publishes a general post titled &ldquo;Our Approach to Wellness.&rdquo; It mentions treating sports injuries in passing, but fails to tie practitioners to their registration records or define exact treatment modalities.
                </p>
                <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                  <strong className="text-red-300">Failure Mode:</strong> When a patient queries &ldquo;AHPRA-registered sports physiotherapists in Subiaco with weekend availability,&rdquo; the model cannot verify eligibility. The practice is omitted.
                </div>
              </div>

              {/* Provenance Approach */}
              <div className="bg-zinc-950 border border-emerald-500/20 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Provenance Approach</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-serif">
                  The clinic establishes an explicit entity graph. It isolates single-topic answer blocks defining clinical services, links practitioners to AHPRA credentials via Schema.org properties, specifies geo-coordinates for its Subiaco rooms, and corroborates facts across health registries.
                </p>
                <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                  <strong className="text-emerald-300">Outcome:</strong> The model does not have to guess. The clinic&apos;s history, expertise, and operational boundaries are fully reconstructible.
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Four Steps to Reconstructible Entity Architecture */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">05.</span>
              <span>What to Do: Four Steps to Reconstructible Entity Architecture</span>
            </h2>
            <p>
              Structuring your digital footprint for answer engines follows four disciplined architectural steps:
            </p>

            <div className="overflow-x-auto not-prose">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="border-b border-white/15 bg-zinc-950 text-zinc-400 font-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Step</th>
                    <th className="py-3 px-4">Focus Area</th>
                    <th className="py-3 px-4">Implementation Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-zinc-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono font-bold text-white whitespace-nowrap">1. Isolate Monosemantic Blocks</td>
                    <td className="py-3 px-4 font-mono text-aeo-cyan">Passage Retrieval</td>
                    <td className="py-3 px-4 leading-relaxed font-serif">Structure service descriptions into 80&ndash;120 word self-contained sections that answer one specific query without contextual bleed.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono font-bold text-white whitespace-nowrap">2. Define Explicit Triples</td>
                    <td className="py-3 px-4 font-mono text-aeo-purple">Semantic Relationships</td>
                    <td className="py-3 px-4 leading-relaxed font-serif">Map core business facts as direct statements: <code className="text-aeo-cyan font-mono text-xs">[Entity] &rarr; [Relationship] &rarr; [Evidence]</code>.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono font-bold text-white whitespace-nowrap">3. Publish Machine-Readable Schema</td>
                    <td className="py-3 px-4 font-mono text-emerald-400">Machine Layer</td>
                    <td className="py-3 px-4 leading-relaxed font-serif">Expose first-party JSON-LD graphs (LocalBusiness, Service, Person) so crawlers ingest structured facts before parsing HTML.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono font-bold text-white whitespace-nowrap">4. Corroborate External Evidence</td>
                    <td className="py-3 px-4 font-mono text-amber-400">Provenance Integrity</td>
                    <td className="py-3 px-4 leading-relaxed font-serif">Ensure corporate registries, licensing databases, and local citations align identically with your on-page data.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Limits and Caveats */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">06.</span>
              <span>Limits and Caveats</span>
            </h2>
            <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>Deterministic Structures vs Probabilistic Retrieval</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-serif">
                Structuring your provenance does not guarantee automated citations or perpetual visibility.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed font-serif">
                Large language models are probabilistic systems. Retrieval thresholds, context window limits, and synthetic ranking weights shift regularly across platforms. Clean data structures cannot compensate for a lack of real-world authority, absent customer reviews, or broken local trust signals. Engineering machine legibility simply ensures that when an engine evaluates your industry, your business facts are coherent enough to survive retrieval.
              </p>
            </div>
          </section>

          {/* Section 7: Next Steps */}
          <section className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl font-bold text-white font-soehne-breit tracking-tight">
              Next Steps &amp; Canonical Verification
            </h2>
            <p className="text-sm text-zinc-300">
              If you want to evaluate how conversational search engines and maps ecosystems interpret your digital footprint, run a <Link href="/diagnostic" className="text-aeo-cyan hover:underline font-semibold">Free AI Visibility Scan</Link> or inspect our public <Link href="/brand-facts" className="text-aeo-cyan hover:underline font-semibold">Canonical Brand Facts</Link> to review the exact schema structures we maintain in production.
            </p>
          </section>

        </article>

        {/* Navigation CTAs */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <Link href="/brand-facts" className="inline-flex items-center gap-2 text-aeo-cyan hover:underline">
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Inspect Canonical Brand Facts</span>
          </Link>
          <Link href="/knowledge-hub/articles" className="inline-flex items-center gap-2 text-aeo-purple hover:underline">
            <span>Explore Technical Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
