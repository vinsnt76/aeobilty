import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  FileText,
  AlertTriangle,
  TrendingDown,
  Target,
  Zap,
  Search,
  Cpu,
  CheckSquare,
  Sparkles,
  Eye,
  Check,
  Award
} from 'lucide-react';

export const metadata = {
  title: "What Is Positional Bias in Retrieval and Answer Engines? | AEObility",
  description: "Learn what positional bias is in AI search and LLMs, how retrieval and synthesis bottlenecks affect search visibility, and how to engineer content using the Positional Bias Audit Checklist.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
  },
};

export default function PositionalBiasArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/android-chrome-512x512.png"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/vince-baker#author",
        "name": "Vinnie Baker",
        "url": "https://aeobility.com.au/vince-baker",
        "jobTitle": "Founder & AI Search Consultant",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
        "name": "What Is Positional Bias in Retrieval and Answer Engines?",
        "description": "Learn what positional bias is in AI search and LLMs, how retrieval and synthesis bottlenecks affect search visibility, and how to engineer content using the Positional Bias Audit Checklist.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#webpage"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval"
        },
        "headline": "What Is Positional Bias in Retrieval and Answer Engines?",
        "description": "Positional bias is a structural tendency inside modern search and AI systems that affects how content is retrieved and how answers are generated.",
        "author": {
          "@type": "Person",
          "name": "Vinnie Baker",
          "url": "https://aeobility.com.au/vince-baker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "image": "https://aeobility.com.au/positional-bias-retrieval-AEObility.png"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Articles & Guides",
            "item": "https://aeobility.com.au/knowledge-hub/articles"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Positional Bias in Retrieval",
            "item": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is positional bias in retrieval and answer engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Positional bias is a structural tendency in modern search and AI systems where answer engines give more weight to information at the beginning or end of a text block, while using middle content less effectively."
            }
          },
          {
            "@type": "Question",
            "name": "What are the two bottlenecks behind positional bias?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Positional bias is shaped by two key bottlenecks: the Retrieval Bottleneck (dense vector models embedding sensitivity) and the Synthesis Bottleneck (LLM lost-in-the-middle context attention dilution)."
            }
          },
          {
            "@type": "Question",
            "name": "What is an Atomic Answer Block in AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An Atomic Answer Block consists of question-based headings matching natural language queries, a direct 40 to 60 word answer lead directly beneath, and supporting context below."
            }
          }
        ]
      }
    ]
  };

  const pillars = [
    { title: "Visibility", desc: "If key facts sit too deep in a page, retrievers are more likely to miss them." },
    { title: "Understanding", desc: "If explanations sit in the middle of long paragraphs, LLMs may use them less reliably." },
    { title: "Selection", desc: "If services are not surfaced clearly, AI systems may be less likely to recommend you." },
    { title: "Local Intent", desc: "Geographic proximity signals must sit at the margins to anchor regional RAG retrieval." },
    { title: "Trust", desc: "Key data points and citations buried in middle text suffer from attention dilution." }
  ];

  const checklistSteps = [
    {
      step: "Step 1",
      title: "Map Your Target Queries to H2 or H3 Headings",
      action: "Review headings. Are they vague or keyword stuffed?",
      why: "Headings act as semantic signposts. AI uses them to align sections with user prompts. Use natural language questions."
    },
    {
      step: "Step 2",
      title: "Apply the First 100 Words Rule",
      action: "Check the first sentence beneath each heading.",
      why: "Dense models in recent studies show notable performance drops when key facts appear later rather than earlier in a passage. Early placement often wins."
    },
    {
      step: "Step 3",
      title: "Measure the Token Budget of Your Sections",
      action: "Check paragraph length.",
      why: "A moderate chunk size helps avoid attention dilution and lost in the middle failures. Keeping blocks within a few hundred tokens gives models a better chance to use the whole section reliably."
    },
    {
      step: "Step 4",
      title: "Check for Fragmented Exceptions and Qualifiers",
      action: "Ensure directives and exceptions sit together.",
      why: "If exceptions are separated from the directive, AI may retrieve the directive but miss the safety condition."
    },
    {
      step: "Step 5",
      title: "Audit the Placement of Trust Signals",
      action: "Identify where your key data points and citations sit.",
      why: "Place trust signals at the margins, not only in the middle. The middle is the easiest place for AI to miss information, especially in long, undifferentiated blocks."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <Breadcrumbs />

      {/* Main Layout Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Sidebar Navigation */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/knowledge-hub" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/knowledge-hub/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO & SEO Local Matrix
              </Link>
              <div className="h-px bg-white/5 my-2" />
              <Link href="/knowledge-hub/articles" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Articles & Guides
              </Link>
              
              <Link href="/knowledge-hub/articles/entity-authority-building" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                Entity Authority Building
              </Link>
              <Link href="/knowledge-hub/articles/aeo-vs-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                AEO vs SEO
              </Link>
              <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                RAG & Answer Engines
              </Link>
              <div className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-aeo-cyan pl-3">
                Positional Bias in Retrieval
              </div>
              <div className="flex flex-col gap-1 ml-8 pl-3 border-l border-white/10 text-xs">
                <Link href="#why-it-matters" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Why It Matters
                </Link>
                <Link href="#two-bottlenecks" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; The Two Bottlenecks
                </Link>
                <Link href="#engineering-content" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Content Engineering
                </Link>
                <Link href="#audit-checklist" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Audit Checklist
                </Link>
              </div>

              <Link href="/knowledge-hub/case-studies" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Client Case Studies
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Main Article Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">

          {/* Article Category & Title Header */}
          <div className="space-y-4 border-b border-white/5 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Technical Reading &bull; Dense Retrieval &amp; LLM Architecture</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              What Is <span className="text-gradient-aeo">Positional Bias</span> in Retrieval and Answer Engines?
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-light font-serif leading-relaxed">
              Positional bias is a structural tendency inside modern search and AI systems. It affects how content is retrieved and how answers are generated. In simple terms, many answer engines appear to give more weight to information at the beginning or end of a text block, while often using middle content less effectively. This behaviour influences whether your business is seen, understood and selected across Search, Maps and AI.
            </p>
          </div>

          {/* Brand Guidelines Quote Box */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-purple-900/10 to-transparent border border-aeo-cyan/20 rounded-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-aeo-cyan flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AEObility Core Purpose</span>
            </div>
            <blockquote className="text-sm md:text-base text-white/90 font-light leading-relaxed italic font-serif">
              “AEObility helps your business appear, make sense, and stand out across Search, Maps and AI.”
            </blockquote>
            <p className="text-xs text-white/60 font-light">
              Positional bias is one of the primary technical reasons this work is essential for Australian businesses.
            </p>
          </div>

          {/* Main Diagram Banner */}
          <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/positional-bias-retrieval-AEObility.png"
              alt="High-tech vector retrieval architecture diagram illustrating positional bias in AI search engines and LLMs showing primacy and recency spikes and lost in the middle context window drop."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Section 1: Why Positional Bias Matters for Australian Businesses */}
          <div id="why-it-matters" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                1
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Why Positional Bias Matters for Australian Businesses
              </h2>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              Positional bias touches all five AEObility value pillars: <strong>visibility, understanding, selection, local intent and trust</strong>.
            </p>

            {/* Value Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5 hover:border-aeo-cyan/20 transition-all">
                  <div className="text-xs font-bold text-aeo-cyan uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan" />
                <span>The Core Purpose of AEO</span>
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                AEO exists to counter these effects. It structures your content so machines can read it, interpret it and use it with greater confidence.
              </p>
            </div>
          </div>

          {/* Section 2: The Two Bottlenecks Behind Positional Bias */}
          <div id="two-bottlenecks" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                2
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                The Two Bottlenecks Behind Positional Bias
              </h2>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              Positional bias is shaped by two key bottlenecks inside the search pipeline: the <strong>retrieval bottleneck</strong> and the <strong>synthesis bottleneck</strong>.
            </p>

            {/* Bottleneck 1: Retrieval */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-aeo-cyan/20 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
                <Search className="w-4 h-4" />
                <span>Bottleneck 1 &bull; Passage Ingestion</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                1. The Retrieval Bottleneck
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed font-serif">
                Dense vector models and late interaction models can be sensitive to where a fact sits inside a passage. Research indicates that these models often perform better when relevant information appears near the beginning of a text block rather than later. One explanation is that vector search models map text to high dimensional coordinates. When key facts are buried deep inside a passage, the opening sentences influence the embedding and the passage can appear less relevant.
              </p>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-xs text-white/70 leading-relaxed font-serif">
                <strong>Model Dynamics:</strong> Keyword matching models like BM25 and full interaction rerankers tend to be more robust to this variation, but modern answer engines often rely heavily on neural retrievers. That is why your most important information should sit near the top of each section where retrievers are most likely to recognise it.
              </div>
            </div>

            {/* Bottleneck 2: Synthesis */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-purple-400/20 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>Bottleneck 2 &bull; LLM Synthesis</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                2. The Synthesis Bottleneck
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed font-serif">
                The <strong>lost in the middle</strong> effect can impair an LLM’s ability to find, verify and use facts from its context window. Even with large context windows, attention is not uniform. Experiments show a distinctive U-shaped pattern where models perform best when relevant information is at the beginning or end of a sequence and less well when it sits in the middle.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                  When information is buried in the middle of a long document, several patterns appear in practice:
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-red-400 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" />
                      <span>Attention Dilution</span>
                    </div>
                    <p className="text-xs text-white/70 font-light font-serif">
                      The model’s attention is spread across surrounding text, making it harder to access or reason over hidden facts.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-amber-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Weaker Reference Identification</span>
                    </div>
                    <p className="text-xs text-white/70 font-light font-serif">
                      As prompt lengths increase, extraction and reference identification can degrade.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-purple-400 flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>Increased Hallucination Risk</span>
                    </div>
                    <p className="text-xs text-white/70 font-light font-serif">
                      When the model cannot easily locate the exact context, its reasoning can break down and hallucinations may rise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-aeo-cyan/10 to-transparent border border-aeo-cyan/30 rounded-xl text-xs text-white font-medium">
                <strong>AEObility Rule:</strong> This is why AEObility structures content for the margins, not the middle.
              </div>
            </div>
          </div>

          {/* Section 3: How to Engineer Content Around Positional Bias */}
          <div id="engineering-content" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                3
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                How to Engineer Content Around Positional Bias
              </h2>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              To work effectively with both bottlenecks, you need to design your content for the margins of each section.
            </p>

            {/* Direct Answer Question Card */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white">
                Should You Put the Direct Answer at the Top of Every Section?
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed font-serif">
                <strong>In most cases, yes.</strong> In the era of Answer Engine Optimisation, placing the direct answer at the top of each section is a strong default. It significantly increases the chances that your expertise will be extracted, cited and used by AI systems.
              </p>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Traditional SEO often rewarded long, narrative pages. AEO shifts the emphasis towards clear, modular sections. You want to keep your most important content out of the silent middle and structure each section as an <strong>Atomic Answer Block</strong>.
              </p>
            </div>

            {/* Atomic Answer Block Blueprint */}
            <div className="p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-aeo-cyan/20 rounded-2xl space-y-4">
              <div className="text-xs uppercase tracking-widest font-bold text-aeo-cyan flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>The Atomic Answer Block Architecture</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-[10px]">1</span>
                    <span>Question-Based Headings</span>
                  </div>
                  <p className="text-xs text-white/70 font-light font-serif">
                    Match natural language queries people speak into AI assistants.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-[10px]">2</span>
                    <span>Lead with Direct Answer</span>
                  </div>
                  <p className="text-xs text-white/70 font-light font-serif">
                    Place a concise, 40 to 60 word definition or explanation directly beneath the heading.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-[10px]">3</span>
                    <span>Provide Deeper Context</span>
                  </div>
                  <p className="text-xs text-white/70 font-light font-serif">
                    Add supporting bullets, examples or narrative details below.
                  </p>
                </div>
              </div>

              <p className="text-xs text-white/50 pt-2 font-serif">
                <strong>Why this structure works:</strong> AI systems scan early, retrieval models show positional bias, and atomic blocks reduce noisy, averaged embeddings.
              </p>
            </div>
          </div>

          {/* Section 4: The Positional Bias Audit Checklist */}
          <div id="audit-checklist" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                4
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                The Positional Bias Audit Checklist
              </h2>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              Use this checklist to audit any page on your site:
            </p>

            <div className="space-y-4">
              {checklistSteps.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-3 hover:border-aeo-cyan/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-aeo-cyan text-xs font-bold">
                        {item.step}
                      </span>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                    <CheckSquare className="w-4 h-4 text-aeo-cyan/60 hidden sm:block" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-white/5 rounded-lg space-y-1">
                      <div className="text-[10px] font-bold text-aeo-cyan uppercase tracking-wider">Audit Action</div>
                      <p className="text-xs text-white/90 font-light">{item.action}</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg space-y-1">
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Why It Matters</div>
                      <p className="text-xs text-white/80 font-light font-serif">{item.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Audit CTA Banner */}
            <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-4 shadow-xl">
              <h3 className="text-xl md:text-3xl font-extrabold text-white">
                Audit Your Content for <span className="text-gradient-aeo">Positional Bias</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
                Want our team to review your website’s passage structure, heading alignment, and token chunking against neural search models?
              </p>
              <div className="pt-2">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20"
                >
                  <span>Get Your Free AI Search Visibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Technical FAQ Section */}
          <div className="space-y-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Positional Bias Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">What is positional bias in retrieval and answer engines?</h4>
                <p className="text-xs text-white/60 leading-relaxed font-serif">
                  Positional bias is a structural tendency in modern search and AI systems where answer engines give more weight to information at the beginning or end of a text block, while using middle content less effectively.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">What are the two bottlenecks behind positional bias?</h4>
                <p className="text-xs text-white/60 leading-relaxed font-serif">
                  Positional bias is shaped by two key bottlenecks: the Retrieval Bottleneck (dense vector models embedding sensitivity) and the Synthesis Bottleneck (LLM lost-in-the-middle context attention dilution).
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">What is an Atomic Answer Block in AEO?</h4>
                <p className="text-xs text-white/60 leading-relaxed font-serif">
                  An Atomic Answer Block consists of question-based headings matching natural language queries, a direct 40 to 60 word answer lead directly beneath, and supporting context below.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles Navigation */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link 
              href="/knowledge-hub/articles/retrieval-augmented-generation" 
              className="group text-xs font-semibold text-white/60 hover:text-aeo-cyan transition-colors flex items-center gap-1"
            >
              &larr; Prev: RAG &amp; Answer Engines
            </Link>
            
            <Link 
              href="/knowledge-hub/articles" 
              className="text-xs font-semibold text-aeo-cyan hover:text-white transition-colors"
            >
              All Articles &amp; Technical Reading &rarr;
            </Link>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
