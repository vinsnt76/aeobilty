import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "AEO vs SEO: The Complete Guide to AI Search | AEObility",
  description: "Discover the shifting search landscape from lexical retrieval to semantic retrieval and learn how Answer Engine Optimisation (AEO) gets your brand into AI answers.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo",
  },
};

export default function AeoVsSeoArticlePage() {
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
        "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo",
        "name": "AEO vs SEO: The Complete Guide to AI Search",
        "description": "Discover the shifting search landscape from lexical retrieval to semantic retrieval and learn how Answer Engine Optimisation (AEO) gets your brand into AI answers.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#article",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#webpage"
        },
        "mainEntityOfPage": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#webpage"
        },
        "headline": "AEO vs SEO: The Complete Guide to AI Search",
        "description": "Discover the shifting search landscape from lexical retrieval to semantic retrieval and learn how Answer Engine Optimisation (AEO) gets your brand into AI answers.",
        "image": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/traditional-seo-vs-aeo_AEObility.webp"
        },
        "author": {
          "@id": "https://aeobility.com.au/vince-baker#author"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "datePublished": "2026-07-16T00:00:00+08:00",
        "dateModified": "2026-07-16T00:00:00+08:00",
        "inLanguage": "en-AU",
        "articleSection": "Articles",
        "genre": "AI Search Marketing Guide",
        "about": [
          {
            "@type": "Thing",
            "name": "Answer Engine Optimisation"
          },
          {
            "@type": "Thing",
            "name": "Search Engine Optimisation"
          },
          {
            "@type": "Thing",
            "name": "Retrieval-Augmented Generation"
          }
        ],
        "mentions": [
          {
            "@type": "WebPage",
            "url": "https://aeobility.com.au/services/aeo",
            "name": "AEO Services"
          },
          {
            "@type": "WebPage",
            "url": "https://aeobility.com.au/services/aeo/shopify",
            "name": "AEO for Shopify"
          },
          {
            "@type": "WebPage",
            "url": "https://aeobility.com.au/knowledge-hub/semantic-seo",
            "name": "Semantic SEO"
          },
          {
            "@type": "WebPage",
            "url": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
            "name": "Case Study: Baby Bento"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au/"
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
            "name": "AEO vs SEO",
            "item": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-driven optimisation focusing on semantic retrieval and contextual answers."
            }
          },
          {
            "@type": "Question",
            "name": "How does AEO differ from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO targets keywords; AEO targets meaning and entity relationships."
            }
          },
          {
            "@type": "Question",
            "name": "Why is AEO becoming more important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI search doesn’t pull whole pages. It pulls passages, concepts and small chunks of meaning. AEO is built for this world. SEO helps you get crawled. AEO helps you get answered."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to stop doing SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. You still need SEO for structure, crawling and traditional Google results. AEO sits on top of that and helps you show up in AI answers and zero‑click results. The best approach is both. SEO builds the house. AEO makes the rooms easy for AI to find."
            }
          }
        ]
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo#glossary",
        "name": "Semantic Glossary",
        "hasDefinedTerm": [
          {
            "@type": "DefinedTerm",
            "name": "Information Architecture",
            "description": "The structural design connecting entities for AI comprehension."
          },
          {
            "@type": "DefinedTerm",
            "name": "Semantic Lattice Maps",
            "description": "Visual frameworks linking topics semantically, not lexically."
          },
          {
            "@type": "DefinedTerm",
            "name": "Intent Families",
            "description": "Intent families are clusters of user goals that share the same underlying purpose."
          },
          {
            "@type": "DefinedTerm",
            "name": "Subject-Object Predict",
            "description": "AI inference connecting brand to product to outcome."
          }
        ]
      }
    ]
  };

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

      {/* Main Container */}
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
              <div className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-aeo-cyan pl-3">
                AEO vs SEO
              </div>
              <Link href="/knowledge-hub/case-studies" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Client Case Studies
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Article Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Header Block */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <span>Articles & Guides &rarr; <Link href="/knowledge-hub/articles" className="hover:underline">Technical Reading</Link></span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              AEO vs SEO: The Complete Guide to <span className="text-gradient-aeo">AI Search</span>
            </h1>
            
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/60 font-sans border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden relative border border-white/20">
                  <Image src="/Profile-Picture-Vinnie.png" alt="Vinnie Baker" fill sizes="32px" className="object-cover" />
                </div>
                <span className="font-semibold text-white/90">Vinnie Baker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40">&bull;</span>
                <time dateTime="2026-07-16">Jul 16, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40">&bull;</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Visual Gravity Field Banner */}
          <figure className="mt-8 mb-10">
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-aeo-cyan/20 via-black/50 to-aeo-purple/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-75 transition-opacity duration-500" />
              <Image
                src="/traditional-seo-vs-aeo_AEObility.webp"
                alt="Abstract visualisation of traditional SEO versus AEO semantic retrieval using AEObility gradient palette."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
            <figcaption className="text-center text-xs text-white/50 mt-3 font-sans italic">
              Abstract visualisation of traditional SEO versus AEO semantic retrieval.
            </figcaption>
          </figure>

          <div className="space-y-6 text-white/80 font-serif font-light leading-relaxed">
            <h2 className="text-2xl font-bold text-white font-sans mt-8 mb-4">1. The Shifting Search Landscape: From Clicks to Answers</h2>
            <p>
              For years, SEO ran on a pretty simple deal: you publish helpful content, Google crawls it, and—if you’ve done a decent job—you earn clicks. That old “ten blue links” model shaped how every business built its website.
            </p>
            <p>
              But that world is disappearing fast.
            </p>
            <p>
              With AI Overviews, Gemini, ChatGPT Search, and Perplexity, search has shifted from <strong>“find websites”</strong> to <strong>“give me the answer now.”</strong> Instead of sending people to your site, AI systems summarise the web and deliver the answer directly on the results page. It’s a zero‑click environment, and the numbers back it up—when an AI summary appears, organic clicks drop by roughly a third.
            </p>
            <p>
              This is the new reality:<br />
              If your content isn’t structured for AI to <strong>quote</strong>, <strong>summarise</strong>, or <strong>cite</strong>, your brand simply doesn’t show up.
            </p>
            <p>
              That’s the line between traditional <strong>SEO</strong> and modern <strong>AEO</strong>.
            </p>

            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">2. What SEO Actually Does (The Old Model)</h2>
            <p>
              SEO is built on <strong>lexical retrieval</strong>—a fancy way of saying “keyword matching.” Search engines scan your pages for exact words, check your backlinks, and decide where your URL should rank.
            </p>
            <p>
              It’s still important. Technical health, page speed, sitemaps, internal linking—none of that goes away.
            </p>
            <p>
              But SEO’s job is clear:<br />
              <strong>Help your website rank so humans click through.</strong>
            </p>
            <p>
              The problem?<br />
              AI search doesn’t care about ranking. It cares about <strong>meaning</strong>, <strong>context</strong>, and <strong>intent</strong>—not keywords.
            </p>

            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">3. What AEO Does (The New Model)</h2>
            <p>
              AEO—<Link href="/services/aeo" className="text-aeo-cyan hover:underline font-semibold">Answer Engine Optimisation</Link>—is built for AI systems that don’t “read” like humans or traditional crawlers. Instead of scanning for keywords, they use <strong>semantic retrieval</strong> and <strong>vector embeddings</strong> to understand concepts.
            </p>
            <p>
              In simple terms:<br />
              AI doesn’t look for the exact words you wrote.<br />
              It looks for the <em>idea</em> you’re talking about.
            </p>
            <p>
              AEO’s job is to:<br />
              <strong>Help AI engines extract your content, understand it, and cite it inside an answer.</strong>
            </p>
            <p>
              This is where the shift from <strong>lexical retrieval &rarr; semantic retrieval &rarr; RAG (Retrieval‑Augmented Generation)</strong> becomes critical.
            </p>

            {/* Semantic Glossary Grid */}
            <div className="my-12 p-[1px] rounded-2xl bg-gradient-to-br from-aeo-cyan/30 via-white/5 to-aeo-purple/30">
              <div className="bg-neutral-950 rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Semantic Glossary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:-translate-y-1 hover:border-aeo-cyan/30 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-aeo-cyan transition-colors">Information Architecture</h4>
                    <p className="text-sm text-white/70">The structural design connecting entities for AI comprehension.</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:-translate-y-1 hover:border-aeo-cyan/30 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-aeo-cyan transition-colors">Semantic Lattice Maps</h4>
                    <p className="text-sm text-white/70">Visual frameworks linking topics semantically, not lexically.</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:-translate-y-1 hover:border-aeo-purple/30 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-aeo-purple transition-colors">Intent Families</h4>
                    <p className="text-sm text-white/70">Intent families are clusters of user goals that share the same underlying purpose.</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:-translate-y-1 hover:border-aeo-purple/30 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-aeo-purple transition-colors">Subject–Object Predict</h4>
                    <p className="text-sm text-white/70">AI inference connecting brand &rarr; product &rarr; outcome.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">4. Lexical vs Semantic Retrieval (Plain English Version)</h2>
            
            <h3 className="text-xl font-bold text-white font-sans mt-6 mb-2">Lexical Retrieval (SEO)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Works like Ctrl+F on a giant library.</li>
              <li>If someone searches “best lunchbox for kids,” Google looks for pages that literally contain those words.</li>
              <li>If your page says “children’s bento containers,” you might miss out.</li>
            </ul>

            <h3 className="text-xl font-bold text-white font-sans mt-6 mb-2">Semantic Retrieval (AEO)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Works like a brain, not a dictionary.</li>
              <li>AI converts your content into mathematical coordinates (vector embeddings).</li>
              <li>It understands that “kids lunchbox,” “school lunch container,” and “bento box” are related ideas.</li>
              <li>It retrieves the <em>closest meaning</em>, not the closest match.</li>
            </ul>

            <h3 className="text-xl font-bold text-white font-sans mt-6 mb-2">RAG (Retrieval‑Augmented Generation)</h3>
            <p>
              This is the layer powering AI Overviews and ChatGPT Search.<br />
              It pulls relevant passages from multiple sources, blends them, and generates a single answer.
            </p>
            <p className="font-semibold text-white/90">
              If your content isn’t structured into <strong>clean, atomic chunks</strong>, the AI simply won’t pick it up.
            </p>

            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">5. SEO vs AEO: The Real Differences</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-white font-bold bg-white/5">
                    <th className="p-3">Area</th>
                    <th className="p-3">SEO</th>
                    <th className="p-3 text-aeo-cyan">AEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3 font-semibold text-white/90">How engines read your content</td>
                    <td className="p-3">Keywords</td>
                    <td className="p-3 text-aeo-cyan">Meaning + intent</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white/90">Retrieval model</td>
                    <td className="p-3">Lexical (BM25, TF‑IDF)</td>
                    <td className="p-3 text-aeo-cyan">Semantic (vector embeddings)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white/90">Optimisation unit</td>
                    <td className="p-3">Whole pages</td>
                    <td className="p-3 text-aeo-cyan">Atomic passages (90–120 tokens)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white/90">Goal</td>
                    <td className="p-3">Rank URLs</td>
                    <td className="p-3 text-aeo-cyan">Earn citations inside AI answers</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white/90">Primary audience</td>
                    <td className="p-3">Humans + crawlers</td>
                    <td className="p-3 text-aeo-cyan">AI agents + conversational users</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white/90">Best format</td>
                    <td className="p-3">Long‑form content</td>
                    <td className="p-3 text-aeo-cyan">Short, structured answer blocks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">6. Why the Funnel Has Collapsed</h2>
            <p>
              <strong>Old SEO funnel:</strong><br />
              - TOF &rarr; MOF &rarr; BOF<br />
              - 15–30 days<br />
              - Multiple clicks<br />
              - Multiple pages
            </p>
            <p>
              <strong>AI search funnel:</strong><br />
              - One question<br />
              - One answer<br />
              - One shortlist<br />
              - One recommendation<br />
              - 5 minutes
            </p>
            <p className="font-semibold text-aeo-cyan text-lg my-4">
              If your content isn’t <strong>pre‑structured</strong> for AI to pull into that answer, you’re invisible.
            </p>
            <p>This is why AEO matters.</p>

            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">7. How to Optimise for AEO (AEObility Playbook)</h2>
            
            <h3 className="text-xl font-bold text-white font-sans mt-6 mb-2">1. Write Atomic Answer Blocks</h3>
            <p>
              Short, direct answers under each heading.<br />
              40–60 words.<br />
              90–120 tokens.<br />
              Answer first retrieval.<br />
              No walls of text.
            </p>

            <h3 className="text-xl font-bold text-white font-sans mt-6 mb-2">2. Use Machine‑Friendly Formatting</h3>
            <p>AI engines love:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>lists</li>
              <li>tables</li>
              <li>FAQs</li>
              <li>comparison matrices</li>
              <li>step‑by‑step breakdowns</li>
            </ul>
            <p>These reduce the “cost of evaluation” for AI systems.</p>

            <h3 className="text-xl font-bold text-white font-sans mt-6 mb-2">3. Add Strong Schema Markup</h3>
            <p>JSON‑LD is your instruction manual for AI search.<br />Use:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>FAQPage</li>
              <li>Product</li>
              <li>Organization</li>
              <li>Author</li>
              <li>HowTo (when relevant)</li>
            </ul>

            <h3 className="text-xl font-bold text-white font-sans mt-6 mb-2">4. Build Clear Internal Linking</h3>
            <p>Link to your core services and knowledge nodes:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><Link href="/services/aeo" className="text-aeo-cyan hover:underline">AEO Services</Link></li>
              <li><Link href="/services/aeo/shopify" className="text-aeo-cyan hover:underline">AEO for Shopify</Link></li>
              <li><Link href="/services/aeo/local-business" className="text-aeo-cyan hover:underline">AEO for Local Businesses</Link></li>
              <li><Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline">Semantic SEO</Link></li>
              <li><Link href="/knowledge-hub/geo" className="text-aeo-cyan hover:underline">GEO Local Matrix</Link></li>
            </ul>
            <p>This reinforces your entity graph and reduces hallucinations.</p>

            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">8. The Bottom Line</h2>
            <p>SEO still matters.<br />But SEO alone won’t get you into AI answers.</p>
            <p>
              AEO is how you make your content <strong>discoverable</strong>, <strong>extractable</strong>, and <strong>quotable</strong> by modern AI systems.
            </p>
            <p>
              If you want your brand to show up in AI Overviews, Gemini, ChatGPT Search, and Perplexity, you need to structure your content for <strong>semantic retrieval</strong> and <strong>RAG</strong>, not just keywords.
            </p>
            <p>
              This is the new search landscape.<br />
              And this guide is your starting point.
            </p>

            {/* FAQ & Suggested Reading Footer */}
            <div className="mt-16 pt-12 border-t border-white/10 space-y-16">
              <section>
                <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.04] transition-colors">
                    <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                      What is AEO?
                      <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <p className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                      AI‑driven optimisation focusing on semantic retrieval and contextual answers.
                    </p>
                  </details>
                  <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.04] transition-colors">
                    <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                      How does AEO differ from SEO?
                      <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <p className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                      SEO targets keywords; AEO targets meaning and entity relationships.
                    </p>
                  </details>
                  <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.04] transition-colors">
                    <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                      Why is AEO becoming more important?
                      <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30 space-y-2">
                      <p>AI search doesn’t pull whole pages. It pulls passages, concepts and small chunks of meaning.</p>
                      <p>AEO is built for this world.</p>
                      <p>SEO helps you get crawled.<br />AEO helps you get answered.</p>
                    </div>
                  </details>
                  <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.04] transition-colors">
                    <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                      Do I need to stop doing SEO?
                      <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30 space-y-2">
                      <p>No. You still need SEO for structure, crawling and traditional Google results.</p>
                      <p>AEO sits on top of that and helps you show up in AI answers and zero‑click results.</p>
                      <p>The best approach is both.</p>
                      <p>SEO builds the house.<br />AEO makes the rooms easy for AI to find.</p>
                    </div>
                  </details>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-8">Suggested Reading</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/knowledge-hub/case-studies/baby-bento" className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-aeo-cyan/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-aeo-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    <div className="relative aspect-video w-full overflow-hidden z-10 border-b border-white/5 bg-neutral-950">
                      <Image src="/case-study-aeo-lifts-traffic.webp" alt="Baby Bento Case Study" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="p-6 relative z-10 flex-grow">
                      <h3 className="font-semibold text-white group-hover:text-aeo-cyan mb-3 transition-colors">Case Study: Baby Bento</h3>
                      <p className="text-sm text-white/60">Structural Search Alignment and semantic uplift.</p>
                    </div>
                  </Link>
                  <Link href="/services/aeo/shopify" className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-aeo-cyan/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-aeo-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    <div className="relative aspect-video w-full overflow-hidden z-10 border-b border-white/5 bg-neutral-950">
                      <Image src="/service-dashboard-layers.png" alt="Shopify AEO Integration" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="p-6 relative z-10 flex-grow">
                      <h3 className="font-semibold text-white group-hover:text-aeo-cyan mb-3 transition-colors">AEO for Shopify</h3>
                      <p className="text-sm text-white/60">Optimising product data for AI search visibility.</p>
                    </div>
                  </Link>
                  <Link href="/knowledge-hub/semantic-seo" className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-aeo-cyan/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-aeo-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    <div className="relative aspect-video w-full overflow-hidden z-10 border-b border-white/5 bg-neutral-950">
                      <Image src="/structured-search-audit-wireframe.png" alt="Semantic SEO Audit Wireframe" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="p-6 relative z-10 flex-grow">
                      <h3 className="font-semibold text-white group-hover:text-aeo-cyan mb-3 transition-colors">Semantic SEO Node</h3>
                      <p className="text-sm text-white/60">Understanding entity‑based indexing and retrieval.</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* Back Navigation & Cross-Linking */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/5 mt-10">
            <Link href="/knowledge-hub/articles" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              &larr; Back to Articles
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
