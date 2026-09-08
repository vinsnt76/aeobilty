const fs = require('fs');
const path = require('path');

const cityFaqs = {
  perth: [
    {
      question: "What is AI search optimisation for Perth businesses?",
      answer: "AI search optimisation ensures your business data, services, and operational facts are structured so platforms like ChatGPT, Perplexity, and AI Overviews can discover and cite them. Perth businesses are currently under-represented in generative answers, making early adoption a significant advantage."
    },
    {
      question: "How is AI search different from traditional SEO in WA?",
      answer: "Traditional SEO relies on keyword rankings and backlinks, whereas AI search prioritises entity clarity, citations, and structured local facts. A local, answer-first content structure matters more for AI recommendations than generic high-volume keywords."
    },
    {
      question: "Do we need separate pages for Perth suburbs (Joondalup, Mandurah, Fremantle)?",
      answer: "You only need dedicated suburb pages if you have a physical presence or distinct service offerings in those areas. Otherwise, a single, strongly-optimised Perth entity page with clear service-area signals is sufficient for AI extraction."
    },
    {
      question: "Can AI search help us reach mining and resources decision-makers?",
      answer: "Yes. Procurement teams increasingly use AI tools to solve complex operational challenges like 'automation for mine sites' or 'safety compliance software WA'. Targeted, technical FAQs and case studies are highly likely to be cited in these generative responses."
    },
    {
      question: "How long does it take to see results from AI search optimisation in Perth?",
      answer: "While AI models index changes rapidly, achieving semantic authority typically takes several weeks to months. The foundational steps—entity clarity, structured data, and GBP alignment—can trigger visibility improvements in subsequent LLM training runs."
    }
  ],
  melbourne: [
    {
      question: "Why aren’t we appearing in AI answers if we rank well in Google?",
      answer: "Ranking high in traditional search does not guarantee AI visibility. AI models prioritise entity clarity, specific citations, and structured data over traditional backlinks. If your data isn't machine-readable, AI tools will bypass you."
    },
    {
      question: "How can a Melbourne business differentiate in AI search when everyone’s doing AEO?",
      answer: "To stand out in a saturated market, you must move beyond generic claims. Providing deep vertical expertise, niche use cases, and proprietary data ensures your brand is cited as the definitive source for complex queries in tech and professional services."
    },
    {
      question: "Do we need separate AI search pages for Melbourne CBD and suburbs?",
      answer: "Split your architecture by location only if you operate distinct teams, offers, or face strong local intent (e.g., Richmond vs. South Yarra). For most brands, a single, highly authoritative Melbourne node is more effective."
    },
    {
      question: "What types of questions do Melbourne buyers ask AI about our services?",
      answer: "Buyers often use AI for complex evaluations, such as comparing pricing models or asking for 'the best SaaS integration agency in Melbourne for logistics.' Your content must proactively map to these highly specific, scenario-based evaluations."
    },
    {
      question: "How do we measure success for AI search optimisation in Melbourne?",
      answer: "Success is tracked through metrics like AI citation share, the volume of branded vs. non-branded AI queries, and the flow of highly qualified, pre-validated referral traffic originating from generative engines."
    }
  ],
  sydney: [
    {
      question: "Is AI search optimisation worth it in a competitive market like Sydney?",
      answer: "Absolutely. In a hyper-competitive landscape like Sydney, AI citations serve as a critical differentiator. Early movers who establish semantic authority gain disproportionate visibility while competitors rely on saturated traditional search channels."
    },
    {
      question: "How do we get recommended when buyers compare Sydney agencies in AI tools?",
      answer: "AI tools excel at aggregating comparison data. To get recommended, you must publish clear comparison content, robust case studies, and explicit positioning that states exactly who your services are for, and who they are not for."
    },
    {
      question: "What should we prioritise first for AI search in Sydney?",
      answer: "Begin with absolute entity clarity by harmonising your NAP (Name, Address, Phone) and deploying LocalBusiness schema. Next, refine your top service pages with answer-first copy, followed by detailed FAQs and structured comparison pages."
    },
    {
      question: "How does AI search fit with our existing SEO and paid media in NSW?",
      answer: "These channels are complementary, not mutually exclusive. Traditional SEO secures rankings, paid media captures immediate transactional demand, and AEO drives generative citations, ensuring you dominate the entire modern discovery funnel."
    },
    {
      question: "What results can Sydney businesses realistically expect from AI search optimisation?",
      answer: "Focus on qualitative improvements rather than raw traffic spikes. Expect steady citation growth, higher-intent traffic from users who have already validated your brand via AI, and shorter sales cycles for complex enterprise decisions."
    }
  ],
  adelaide: [
    {
      question: "Is AI search optimisation relevant for small Adelaide businesses?",
      answer: "Yes. AI recommendations heavily favour clear, local, and well-structured businesses. Because many Adelaide competitors have not optimised for generative engines, early adoption offers a significant advantage for local SMBs."
    },
    {
      question: "What’s the simplest way to get started with AI search in Adelaide?",
      answer: "Start with the essentials: ensure your robots.txt allows AI bot crawling, deploy accurate LocalBusiness schema, complete your Google Business Profile (GBP), and publish 8–15 real customer FAQs using FAQPage schema."
    },
    {
      question: "How does AI search help us win more local SA leads?",
      answer: "Local buyers increasingly use AI to find specific solutions, like the 'best commercial plumber in Adelaide' or scenario-based queries. By structuring your answers to match these intents, AI tools will serve your brand directly to high-intent leads."
    },
    {
      question: "Do we need a big budget to benefit from AI search optimisation?",
      answer: "No. Clarity and consistency outpace massive ad budgets in AI search. You can achieve substantial wins simply by fixing technical basics, structuring your business data, and providing direct answers to real customer questions."
    },
    {
      question: "How quickly can an Adelaide business expect to see AI search results?",
      answer: "Foundational fixes—such as GBP alignment, adding FAQs, and deploying schema—can yield quick visibility wins as AI crawlers index the changes. Broader entity authority builds progressively over subsequent training cycles."
    }
  ],
  brisbane: [
    {
      question: "Why aren’t we appearing for suburban Brisbane queries in AI search?",
      answer: "AI search relies on exact proximity and service-area clarity. If you lack suburb-level content or precise GBP service-area settings, generative engines will overlook your business for highly localised prompts like 'near Carindale'."
    },
    {
      question: "How do we get recommended when AI compares Brisbane agencies or clinics?",
      answer: "To dominate comparison prompts, you must publish highly detailed service descriptions and actively encourage reviews that mention specific treatments or services. Structured comparison content gives AI tools the exact facts needed to recommend you."
    },
    {
      question: "What’s different about AI search for multi-location businesses in Brisbane/SEQ?",
      answer: "Multi-location brands must isolate their entity signals. This requires individual GBP optimisation per location, distinct location pages, and customised FAQs and schema for each branch rather than templated, duplicate content."
    },
    {
      question: "What questions do Brisbane customers ask AI about our services?",
      answer: "Customers frequently ask AI for tailored recommendations, such as pricing benchmarks, specific scenario solutions, and highly localised queries like 'best pediatric clinic in Brisbane North for toddlers'."
    },
    {
      question: "How do we measure AI search performance for Brisbane?",
      answer: "Performance is evaluated by tracking your AI citation share, monitoring specific AI query inclusion, and analysing the conversion metrics of referral traffic arriving from generative search engines."
    }
  ]
};

const cities = Object.keys(cityFaqs);

for (const city of cities) {
  const filePath = path.join(__dirname, 'src', 'app', 'services', 'ai-search-marketing', city, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace `const faqs = [...]` array
  const faqsRegex = /const faqs = \[\s*\{\s*question: "Is AI search marketing different from traditional SEO\?".*?\];/s;
  
  const faqsCode = `const faqs = ${JSON.stringify(cityFaqs[city], null, 4)};`;
  
  if (faqsRegex.test(content)) {
    content = content.replace(faqsRegex, faqsCode);
  } else {
    console.log('FAQ array not found for ' + city);
  }

  // 2. Inject FAQPage schema into JSON-LD graph
  // Find the end of the JSON-LD graph array `      ]
  //    };` and inject the FAQPage object.
  const schemaRegex = /      \]\s*\};\s*return \(/s;
  
  const faqSchemaObj = {
    "@type": "FAQPage",
    "@id": `https://aeobility.com.au/services/ai-search-marketing/${city}#faq`,
    "mainEntity": cityFaqs[city].map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const schemaInject = `,\n        ${JSON.stringify(faqSchemaObj, null, 8).replace(/\n/g, '\n        ')}\n      ]\n    };\n\n    return (`;
  
  if (schemaRegex.test(content)) {
    content = content.replace(schemaRegex, schemaInject);
  } else {
    console.log('JSON-LD graph end not found for ' + city);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + city);
}
