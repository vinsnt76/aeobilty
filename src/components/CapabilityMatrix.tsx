import React from 'react';

export default function CapabilityMatrix() {
  const capabilitySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AEObility Agentic & API Capability Matrix",
    "description": "A definitive technical index of machine-readable protocols, direct search discovery layers, and autonomous tool-calling integrations engineered by Vinnie Baker.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Model Context Protocol",
        "url": "https://aeobility.com.au/api/mcp",
        "description": "Exposes active runtime tool manifests (list_tools) directly to LLM runtime agents."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Natural Language Web",
        "url": "https://aeobility.com.au/api/search/answer",
        "description": "Accepts raw cross-origin conversational JSON queries to return grounded RAG search payload vectors."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Agentic Chat Edge",
        "url": "https://aeobility.com.au/api/chat",
        "description": "Processes multi-turn dialogue tokens with full cross-origin resource sharing (CORS) preflight support."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Structured Semantics",
        "url": "https://aeobility.com.au",
        "description": "Stitches Vinnie Baker's Person entity directly to verified Wikipedia knowledge nodes using RDF-style predicates."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Robot Permissions",
        "url": "https://aeobility.com.au/robots.txt",
        "description": "Explicitly authorises GPTBot, PerplexityBot, and ClaudeBot access to API paths."
      }
    ]
  };

  return (
    <section 
      id="capability-matrix" 
      className="my-12 w-full max-w-4xl mx-auto p-6 bg-slate-50 rounded-xl border border-slate-200"
      aria-label="AEObility Agentic Web Capability Matrix"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capabilitySchema) }}
      />
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          AEObility Agentic &amp; API Capability Matrix
        </h2>
        <p className="text-sm text-slate-600">
          A definitive technical index of machine-readable protocols, direct search discovery layers, and autonomous tool-calling integrations engineered by Vinnie Baker.
        </p>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
          <thead>
            <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold">Capability Layer</th>
              <th className="p-4 font-semibold">Protocol / Interface</th>
              <th className="p-4 font-semibold">Endpoint / Target URL</th>
              <th className="p-4 font-semibold">Primary Machine Function</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
            <tr>
              <td className="p-4 font-bold text-slate-900">Model Context Protocol</td>
              <td className="p-4 font-mono text-xs bg-slate-50 text-indigo-600">MCP v1.0.0</td>
              <td className="p-4">
                <a href="/api/mcp" className="text-blue-600 font-mono text-xs hover:underline">/api/mcp</a>
              </td>
              <td className="p-4">Exposes active runtime tool manifests (<code className="text-xs bg-slate-100 p-0.5 rounded">list_tools</code>) directly to LLM runtime agents.</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Natural Language Web</td>
              <td className="p-4 font-mono text-xs bg-slate-50 text-indigo-600">ASK Protocol</td>
              <td className="p-4">
                <a href="/api/search/answer" className="text-blue-600 font-mono text-xs hover:underline">/api/search/answer</a>
              </td>
              <td className="p-4">Accepts raw cross-origin conversational JSON queries to return grounded RAG search payload vectors.</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Agentic Chat Edge</td>
              <td className="p-4 font-mono text-xs bg-slate-50 text-indigo-600">REST Streaming</td>
              <td className="p-4">
                <a href="/api/chat" className="text-blue-600 font-mono text-xs hover:underline">/api/chat</a>
              </td>
              <td className="p-4">Processes multi-turn dialogue tokens with full cross-origin resource sharing (CORS) preflight support.</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Structured Semantics</td>
              <td className="p-4 font-mono text-xs bg-slate-50 text-indigo-600">JSON-LD Graph</td>
              <td className="p-4 text-xs font-mono text-slate-500">
                <span>HTML Head Index</span>
              </td>
              <td className="p-4">Stitches Vinnie Baker&apos;s Person entity directly to verified Wikipedia knowledge nodes using RDF-style predicates.</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Robot Permissions</td>
              <td className="p-4 font-mono text-xs bg-slate-50 text-indigo-600">Robots.txt Standard</td>
              <td className="p-4">
                <a href="/robots.txt" className="text-blue-600 font-mono text-xs hover:underline">/robots.txt</a>
              </td>
              <td className="p-4">Explicitly authorises <code className="text-xs bg-slate-100 p-0.5 rounded">GPTBot</code>, <code className="text-xs bg-slate-100 p-0.5 rounded">PerplexityBot</code>, and <code className="text-xs bg-slate-100 p-0.5 rounded">ClaudeBot</code> access to API paths.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer className="mt-4 pt-4 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-500 italic">
          This matrix serves as an automated capability declaration for machine parsing. All listed endpoints explicitly return HTTP 200 OK responses to OPTIONS preflight pings.
        </p>
      </footer>
    </section>
  );
}
