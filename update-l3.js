const fs = require('fs');
const path = require('path');

const cities = [
  { id: 'perth', focus: 'trades' },
  { id: 'melbourne', focus: 'tech' },
  { id: 'sydney', focus: 'tech' },
  { id: 'adelaide', focus: 'tech' },
  { id: 'brisbane', focus: 'trades' }
];

for (const city of cities) {
  const filePath = path.join(__dirname, 'src', 'app', 'services', 'ai-search-marketing', city.id, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Vector B (Lateral Proof Link)
  const lateralLink = city.focus === 'trades'
    ? 'Review our execution guardrails for local trades and service networks in our productised <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300">Technical Optimisation Sprints Overview</Link>.'
    : 'See how machine-readable identity architecture reduces context dilution in our <Link href="/knowledge-hub/guides" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300">Information Architecture & Lattice Overview</Link>.';

  const vectorBBlock = `
                <div className="mt-6 p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <p className="text-sm text-cyan-50 font-serif leading-relaxed">
                    ${lateralLink}
                  </p>
                </div>
  `;

  // Inject Vector B right under the </h2> in the Hero block
  content = content.replace('</h2>', '</h2>\n' + vectorBBlock);

  // Vector C (Diagnostic CTA)
  const vectorCBlock = `
            {/* Action Entity Resolution Framework CTA */}
            <section className="border-t border-white/10 pt-16 scroll-mt-24">
              <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md text-center space-y-6">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Action Entity Resolution Framework</h3>
                <p className="text-sm sm:text-base text-zinc-300 font-serif max-w-xl mx-auto leading-relaxed">
                  Are your local brand coordinates hidden behind answer engine retrieval bottlenecks? Execute a live telemetry scan via our <Link href="/diagnostic?auto=true&intent=ai+search+optimisation+${city.id}" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300 font-semibold">Interactive AI Search Diagnostic Gateway</Link>.
                </p>
              </div>
            </section>
  `;

  // We will replace the entire "3. Streamlined 12-Column Responsive Diagnostic Form Module" with Vector C Block
  const diagnosticRegex = /\{\/\* 3\. Streamlined 12-Column Responsive Diagnostic Form Module \*\/\}.*?<\/section>/s;
  
  if (diagnosticRegex.test(content)) {
    content = content.replace(diagnosticRegex, vectorCBlock);
  } else {
    console.log('Diagnostic block not found in ' + city.id);
  }

  // Double check Australian spelling inside the replaced blocks if needed, but we already manually did it (Optimisation).
  content = content.replace(/Optimization/g, 'Optimisation');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + city.id);
}
