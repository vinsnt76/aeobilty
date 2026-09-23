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
  FileSpreadsheet, 
  Layers, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "How to Build Entity Density for AI Search (Step-by-Step SOP) | AEObility",
  description: "Step-by-step tutorial on auditing and building 80%+ entity density into on-page headers and opening copy for Answer Engine Optimisation (AEO). Includes free Google Sheet diagnostic template.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo",
  },
  openGraph: {
    title: "How to Build Entity Density for AI Search | AEObility Tutorial",
    description: "Step-by-step SOP for auditing and building 80%+ entity density into on-page copy for ChatGPT, Perplexity, and Google AI Overviews.",
    url: "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo",
    type: "article",
  },
};

export default function HowToAuditAndBuildEntityDensityPage() {
  const tutorialSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo#article",
        "name": "How to Build Entity Density into Your On-Page Copy for AI Search",
        "headline": "How to Build Entity Density into Your On-Page Copy for AI Search (Step-by-Step Guide)",
        "description": "Comprehensive tutorial and standard operating procedure for auditing, mapping, and engineering 80%+ entity density into on-page structural zones for Answer Engine Optimisation.",
        "url": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo",
        "inLanguage": "en-AU",
        "datePublished": "2026-09-24",
        "dateModified": "2026-09-24",
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
          "Entity Density",
          "Answer Engine Optimisation",
          "Generative Engine Optimisation",
          "Semantic SEO",
          "Schema.org Entity Graph"
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo#howto",
        "name": "How to Audit and Build Entity Density for AEO",
        "description": "A 5-step SOP to measure, diagnose, and optimize on-page entity density to achieve an 80%+ semantic salience score for AI search engines.",
        "totalTime": "PT25M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose Your Page Architecture Framework",
            "text": "Identify your target page archetype (Homepage, About Page, Service Sub-page, or Regional Location Node) to load the appropriate 5-node schema entity matrix."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Generate the Audit Matrix",
            "text": "Open the AEObility Entity SEO Diagnostic Sheet and run the automated framework generator to establish target entity anchors."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Extract and Ingest Structural Copy",
            "text": "Paste your H1 headline, immediate subheaders, and opening 150-200 words of introductory body copy into the diagnostic evaluation cell."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Evaluate Automated Detection",
            "text": "Review automated detection formulas to flag missing entity categories across Legal Identity, Leadership, Temporal Grounding, Domain Taxonomy, and Location."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Reach the 80%+ Semantic Coverage Threshold",
            "text": "Refactor opening copy to convert generic adjectives into explicit Schema.org-aligned entity anchors until total entity density exceeds 80%."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is entity density in SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entity density in Answer Engine Optimisation (AEO) is the ratio of explicitly recognised topical entities and canonical attributes present within a page's primary structural zones (H1/H2 headers and opening 150 words) relative to total word count."
            }
          },
          {
            "@type": "Question",
            "name": "How does entity density differ from keyword density?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Keyword density measures how frequently a specific text string repeats within a document. Entity density measures the presence and proximity of distinct, disambiguated real-world concepts, registered organizations, certified individuals, and geographic anchors that language models map to knowledge graphs."
            }
          },
          {
            "@type": "Question",
            "name": "What is the ideal entity score for generative search engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEObility benchmarks an 80%+ semantic coverage score across the first 150 words. Pages with 80%+ verified entity density provide sufficient semantic confidence for AI models to synthesize answers without hallucination or competitor substitution."
            }
          },
          {
            "@type": "Question",
            "name": "Can high entity density lead to search over-optimisation penalties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Unlike legacy keyword stuffing, entity density relies on natural grammatical triples (Subject-Predicate-Object). Providing precise factual anchors (such as founding dates, practitioner credentials, and municipal boundaries) enhances reading clarity for humans while eliminating ambiguity for machines."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tutorialSchema) }}
      />
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-24 w-full space-y-12">
        
        {/* Article Header & Eyebrow */}
        <header className="space-y-6 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>AEO Tutorial &bull; On-Page Entity Architecture</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
              How to Build Entity Density into Your On-Page Copy for AI Search
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-serif italic border-l-2 border-aeo-cyan pl-4 py-1 leading-snug">
              Keyword density is an outdated relic of 2015. Modern Answer Engines evaluate semantic triples and entity salience. Here is how to audit and build 80%+ entity density into your headers and opening copy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400 pt-2">
            <div>Author: <strong className="text-white">Vinnie Baker</strong></div>
            <div>Published: <span className="text-slate-300">24 Sep 2026</span></div>
            <div>Difficulty: <span className="text-aeo-cyan font-bold">Intermediate</span></div>
            <div>Duration: <span className="text-aeo-purple font-bold">25 Mins</span></div>
            <div>Format: <span className="text-emerald-400 font-bold">Interactive SOP</span></div>
          </div>
        </header>

        {/* Definitional Opener Box (Level 2 Validated Dark Glass Card) */}
        <section 
          aria-label="Definitional Opener" 
          className="relative isolate overflow-hidden rounded-2xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_30px_rgba(0,229,255,0.08)] p-6 sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Core Definition &bull; Passage Retrieval Anchor</span>
            </div>
            <p className="text-base sm:text-lg text-slate-100 font-serif leading-relaxed">
              &ldquo;Entity density in Answer Engine Optimisation (AEO) is the ratio of explicitly recognised topical entities and canonical attributes present within a page&apos;s primary structural zones (H1/H2 headers and opening 150 words) relative to total word count.&rdquo;
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span>Benchmark Target: <strong className="text-aeo-cyan font-bold">80%+ Semantic Coverage</strong></span>
              <span>&bull;</span>
              <span>Zone: <strong className="text-slate-200">First 150 Words &amp; Headers</strong></span>
            </div>
          </div>
        </section>

        {/* Interactive Google Sheet Tool Preview Container (Option 2: Scrollable Preview + Floating Header) */}
        <section aria-label="Interactive Diagnostic Tool" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-lg font-bold text-white font-soehne-breit flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-aeo-cyan" />
              <span>Free Diagnostic Tool: AEObility Entity SEO Template</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">Google Sheets SOP &amp; Audit Engine</span>
          </div>

          <div className="relative isolate overflow-hidden rounded-2xl bg-slate-950/90 backdrop-blur-md border border-purple-500/30 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />
            
            {/* Template Card Floating Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-900/90 border-b border-white/10">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <span>AEObility | Entity SEO Diagnostic Template</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan uppercase font-bold">v2.4</span>
                </div>
                <div className="text-xs text-slate-400">Automated 5-node entity matching formula and semantic coverage auditor</div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-aeo-cyan to-cyan-400 hover:from-cyan-300 hover:to-aeo-cyan text-black font-semibold text-xs font-mono shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-200"
                >
                  <span>⚡ Make a Copy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Read-Only Sheet Preview */}
            <div className="relative w-full h-[460px] bg-slate-950">
              <iframe
                src="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/preview?rm=minimal"
                title="AEObility Entity SEO Diagnostic Tool Preview"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Preview Footer Utility Row */}
            <div className="p-3 bg-slate-900/60 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span>Free template &bull; Zero login required</span>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/template/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aeo-cyan hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Open in Google Template Preview Mode</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Tutorial Body Sections */}
        <article className="space-y-12 font-serif text-base leading-relaxed text-slate-300">
          
          {/* Section 1: The Foundation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">01.</span>
              <span>The Foundation: Why Entity Density Replaced Keyword Density</span>
            </h2>
            <p>
              In traditional search, crawlers tallied how frequently a target keyword appeared in your body copy. If an article mentioned &ldquo;commercial refrigeration repairs Perth&rdquo; six times across 800 words, algorithmic keyword density scores flagged the page as relevant.
            </p>
            <p className="text-white font-semibold">
              Generative answer engines do not count words. They parse semantic triples.
            </p>
            <p>
              When an LLM (such as GPT-4o, Gemini 2.0, or Perplexity Sonar) evaluates an on-page passage, it breaks unstructured sentences into deterministic knowledge graph triples:
            </p>

            {/* Triples Schematic Box */}
            <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/75 backdrop-blur-md border border-purple-500/20 shadow-xl p-5 space-y-2 font-mono text-xs sm:text-sm text-slate-300">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
              <div className="text-xs text-slate-400 uppercase font-semibold">Deterministic Relationship Triple:</div>
              <div className="text-aeo-cyan font-bold text-sm sm:text-base">
                [Subject / Entity] &rarr; [Predicate / Property] &rarr; [Object / Value]
              </div>
              <div className="text-xs text-slate-400 pt-1 border-t border-white/5">
                Example: <span className="text-white">[AEObility]</span> &rarr; <span className="text-purple-300">[foundedBy]</span> &rarr; <span className="text-cyan-300">[Vinnie Baker]</span> &bull; <span className="text-white">[AEObility]</span> &rarr; <span className="text-purple-300">[location]</span> &rarr; <span className="text-emerald-300">[Perth, Western Australia]</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white font-soehne-breit pt-2">The &ldquo;First 150 Words&rdquo; Primacy Rule</h3>
            <p>
              Neural retrieval architectures exhibit pronounced positional bias. Large language models experience primacy attention spikes: when scanning candidate chunks during Retrieval-Augmented Generation (RAG), facts placed in the document header and opening 150 words carry significantly higher attention weights than identical statements buried in paragraph eight.
            </p>
            <p>
              If an answer engine cannot extract <strong>who</strong> the entity is, <strong>what</strong> canonical service it provides, and <strong>where</strong> it operates within the opening paragraph, citation confidence drops below synthesis thresholds.
            </p>
          </section>

          {/* Section 2: The 5-Node Entity Architecture */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">02.</span>
              <span>The 5-Node Entity Architecture</span>
            </h2>
            <p>
              To eliminate ambiguity, every commercial page architecture must anchor five definitive entity nodes. In the AEObility Entity SEO Template, these five anchors establish the bedrock of machine disambiguation:
            </p>

            {/* 5-Node Table in Glass Container */}
            <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/90 backdrop-blur-md border border-purple-500/25 shadow-2xl not-prose">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-900/60 text-slate-400 font-mono uppercase tracking-wider">
                      <th className="py-3 px-4">Node</th>
                      <th className="py-3 px-4">Architecture Role</th>
                      <th className="py-3 px-4">Example (About Page)</th>
                      <th className="py-3 px-4">Schema.org Property</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-300">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">Node 1</td>
                      <td className="py-3.5 px-4 font-medium text-aeo-cyan font-mono">Legal Corporate Entity</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">AEObility</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">Organization.legalName</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">Node 2</td>
                      <td className="py-3.5 px-4 font-medium text-aeo-purple font-mono">Leadership &amp; E-E-A-T Anchor</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Vince Baker</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">Person.name / founder</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">Node 3</td>
                      <td className="py-3.5 px-4 font-medium text-amber-400 font-mono">Temporal Anchor (History)</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Established 2026</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">foundingDate</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">Node 4</td>
                      <td className="py-3.5 px-4 font-medium text-emerald-400 font-mono">Semantic Domain / Core Skill</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Answer Engine Optimisation</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">knowsAbout / Service</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">Node 5</td>
                      <td className="py-3.5 px-4 font-medium text-cyan-400 font-mono">Geographic Anchor</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Perth, Western Australia</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">PostalAddress / location</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-slate-300">
              <strong>Why this matters:</strong> Explicitly anchoring these five nodes prevents temporal hallucination (models guessing your founding year or operating longevity), eliminates entity collision (differentiating your agency from namesakes in other jurisdictions), and grounds geographic authority.
            </p>
          </section>

          {/* Section 3: Step-by-Step SOP */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">03.</span>
              <span>The 5-Step Diagnostic SOP (How to Audit Your Copy)</span>
            </h2>
            <p>
              Use the AEObility Google Sheet template to audit any live URL or drafted document in under five minutes:
            </p>

            <div className="space-y-4 not-prose">
              {/* Step 1 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-aeo-cyan uppercase">
                  <span>Step 1</span>
                  <span>&bull;</span>
                  <span>Choose Your Page Architecture Framework</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Determine whether the target page is a <strong>Homepage</strong> (brand hub), <strong>About Page</strong> (founder E-E-A-T), <strong>Service Sub-page</strong> (commercial solution), or <strong>Location Page</strong> (regional GEO cluster). Each framework specifies a unique node priority matrix.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-aeo-purple uppercase">
                  <span>Step 2</span>
                  <span>&bull;</span>
                  <span>Generate the Audit Matrix</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Duplicate the template into your Google Drive via the <a href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/copy" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline font-mono">Make a Copy link</a>. The template pre-populates target entity fields according to the chosen archetype.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase">
                  <span>Step 3</span>
                  <span>&bull;</span>
                  <span>Extract and Paste Opening Structural Copy</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Copy your live page&apos;s H1 headline, immediate subheaders, and first 150–200 words. Paste the text directly into cell <code className="text-aeo-cyan font-mono text-xs bg-black/60 px-1 py-0.5 rounded border border-white/10">A5</code> of the diagnostic tab.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-400 uppercase">
                  <span>Step 4</span>
                  <span>&bull;</span>
                  <span>Evaluate Automated Detection (Found vs Missing)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  The automated sheet regex parser scans your text for exact entity anchors. Cells in Column C flag green (<span className="text-emerald-400 font-mono text-xs font-bold">MATCH</span>) or red (<span className="text-rose-400 font-mono text-xs font-bold">MISSING</span>) against canonical entity definitions.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-aeo-cyan uppercase">
                  <span>Step 5</span>
                  <span>&bull;</span>
                  <span>Reach the 80%+ Semantic Coverage Threshold</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Iteratively refactor missing nodes in your opening copy. As missing attributes are converted into natural entity statements, cell <code className="text-aeo-cyan font-mono text-xs bg-black/60 px-1 py-0.5 rounded border border-white/10">E5</code> updates in real time until the document exceeds the 80% coverage mark.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Practical Teardown (Before vs After) */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">04.</span>
              <span>Practical Teardown: Before vs After Rewrite</span>
            </h2>
            <p>
              Here is how a real-world agency opening passage transforms when re-engineered for machine legibility:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose font-sans">
              {/* Before Card */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.06)] p-6 space-y-3">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                    <XCircle className="w-4 h-4" />
                    <span>Before Rewrite &bull; 20% Entity Score</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-[10px] font-bold">Unanchored</span>
                </div>
                <blockquote className="text-xs text-slate-300 leading-relaxed font-serif italic border-l-2 border-amber-500/30 pl-3">
                  &ldquo;We are a premier digital marketing agency passionate about helping businesses grow online. Our expert team delivers world-class results for modern brands.&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-white/5 space-y-1 text-[11px] font-mono text-slate-400">
                  <div><strong className="text-rose-400">&times; Legal Name:</strong> Missing entirely</div>
                  <div><strong className="text-rose-400">&times; Location:</strong> Generic (&ldquo;online&rdquo;)</div>
                  <div><strong className="text-rose-400">&times; Service:</strong> Ambiguous (&ldquo;world-class results&rdquo;)</div>
                  <div><strong className="text-rose-400">&times; E-E-A-T:</strong> Unverified claims (&ldquo;premier agency&rdquo;)</div>
                </div>
              </div>

              {/* After Card */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_25px_rgba(0,229,255,0.08)] p-6 space-y-3">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>After Rewrite &bull; 100% Entity Score</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-aeo-cyan font-mono text-[10px] font-bold">Disambiguated</span>
                </div>
                <blockquote className="text-xs text-slate-100 leading-relaxed font-serif border-l-2 border-aeo-cyan pl-3">
                  &ldquo;AEObility is an Answer Engine Optimisation (AEO) consultancy founded by Vince Baker in Perth, Western Australia. We specialise in generative engine optimisation (GEO), helping enterprise brands establish canonical entity density across ChatGPT, Perplexity, and Google AI Overviews.&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-white/5 space-y-1 text-[11px] font-mono text-slate-300">
                  <div><strong className="text-emerald-400">&check; Legal Name:</strong> AEObility</div>
                  <div><strong className="text-emerald-400">&check; Founder:</strong> Vince Baker</div>
                  <div><strong className="text-emerald-400">&check; Location:</strong> Perth, Western Australia</div>
                  <div><strong className="text-emerald-400">&check; Core Domain:</strong> AEO &amp; GEO Consultation</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Connecting Copy to Structured Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">05.</span>
              <span>Connecting On-Page Copy to JSON-LD Schema</span>
            </h2>
            <p>
              Entity density in visible text is only half the equation. Neural crawlers compare the entity anchors stated in your HTML against the deterministic RDF triples published in your Schema.org graph.
            </p>
            <p>
              If your JSON-LD claims your business was founded in 2026 by Vince Baker in Perth, but your on-page copy says nothing about your founder or location, language models flag an evidentiary gap.
            </p>
            
            {/* Schema Connection Callout */}
            <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/75 backdrop-blur-md border border-purple-500/25 p-5 space-y-3 font-mono text-xs text-slate-300">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 text-aeo-purple font-bold uppercase">
                <Layers className="w-4 h-4" />
                <span>The 1:1 Schema Grounding Principle</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-serif">
                Every primary entity property in your JSON-LD script tag (<code className="text-cyan-300">legalName</code>, <code className="text-cyan-300">founder</code>, <code className="text-cyan-300">foundingDate</code>, <code className="text-cyan-300">addressLocality</code>) must have a corresponding verbatim textual mention within the first 150 words of on-page copy.
              </p>
            </div>
          </section>

          {/* Section 6: Schema-Ready FAQs */}
          <section className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-aeo-cyan" />
              <span>Frequently Asked Questions</span>
            </h2>

            <div className="space-y-4 not-prose">
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">What is entity density in SEO?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Entity density is the ratio of explicitly disambiguated real-world entities (organizations, people, locations, and accredited service classifications) present in primary structural zones (H1, H2, and opening 150 words) relative to total word count.
                </p>
              </div>

              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">How does entity density differ from keyword density?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Keyword density tracks the raw mathematical repetition of a text phrase. Entity density evaluates semantic relationships mapped to knowledge graphs, verifying who the entity is, where they operate, and how their offerings connect to recognized standards.
                </p>
              </div>

              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">What is the ideal entity score for generative search engines?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  We recommend achieving at least 80% entity coverage across the first 150 words. Hitting this threshold provides LLMs with unambiguous grounding attributes, dramatically increasing citation odds in AI Overviews and conversational syntheses.
                </p>
              </div>

              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">Can high entity density lead to over-optimisation penalties?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  No. Unlike legacy keyword stuffing, entity density relies on natural grammatical triples (Subject-Predicate-Object). Providing precise factual anchors (such as founding dates, practitioner credentials, and municipal boundaries) enhances reading clarity for humans while eliminating ambiguity for machines.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Next Steps & Conversion */}
          <section className="space-y-6 border-t border-white/10 pt-8 not-prose">
            <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 space-y-4 shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />
              <div className="text-xs font-mono text-aeo-cyan uppercase font-bold tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Take Action on Your Entity Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                Ready to Disambiguate Your Brand Across AI Search?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-serif">
                Download the free diagnostic template to audit your opening copy, or book a specialist consultation to have our Perth technical architects construct your canonical Schema.org entity graph.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-cyan-400 hover:from-cyan-300 hover:to-aeo-cyan text-black font-semibold text-xs font-mono shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Make a Copy of the Diagnostic Sheet</span>
                </a>
                <Link
                  href="/diagnostic"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/15 hover:border-aeo-cyan/50 text-white font-medium text-xs font-mono transition-all flex items-center gap-2"
                >
                  <span>Run Free AI Visibility Scan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-aeo-cyan" />
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  Book Specialist Review &rarr;
                </Link>
              </div>
            </div>
          </section>

        </article>

        {/* Navigation CTAs */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <Link href="/knowledge-hub/tutorials" className="inline-flex items-center gap-2 text-aeo-cyan hover:underline">
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Explore All Tutorials</span>
          </Link>
          <Link href="/knowledge-hub/articles/machine-legibility-data-provenance" className="inline-flex items-center gap-2 text-aeo-purple hover:underline">
            <span>Read: Machine Legibility &amp; Data Provenance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
