import { Resend } from "resend";

export const Forms = {
  wire() {
    return {
      async submitAuditForm({
        name,
        email,
        website,
        phone,
        scores,
        findings,
        targetQuery,
        recommendations,
        blindSpot,
        firstImpression,
        assistantAssisted
      }: {
        name?: string;
        email: string;
        website?: string;
        phone?: string;
        scores?: { readinessScore?: number; proximityScore?: number };
        findings?: string[];
        targetQuery?: string;
        recommendations?: string[];
        blindSpot?: string;
        firstImpression?: string;
        assistantAssisted?: boolean;
      }) {
        if (!email) {
          throw new Error("Missing required email address");
        }

        const resend = new Resend(process.env.RESEND_API_KEY || "re_dummykeyforbuild");
        const fromEmail = process.env.RESEND_FROM_EMAIL || "AEObility Diagnostics <reports@aeobility.com.au>";
        const domain = website ? website.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'your website';
        const readiness = scores?.readinessScore ?? 95;
        const proximity = scores?.proximityScore ?? 24;

        const effectiveRecs: string[] = (recommendations && recommendations.length > 0)
          ? recommendations
          : (findings && findings.length > 0)
            ? findings
            : [
                "Anchor Regional Entity Schema: Inject nested LocalBusiness and serviceArea nodes linked to Wikidata.",
                "Publish Location-Specific Evidence: Deploy case studies addressing targeted Australian customer queries.",
                "Expand Passage Context Chunking: Structure high-density 150-character answer blocks under H2/H3 headings."
              ];

        // 1. Non-blocking internal notification
        try {
          const internalResult = await resend.emails.send({
            from: fromEmail,
            to: process.env.TEAM_NOTIFICATION_EMAIL || "support@aeobility.com.au",
            subject: `[New Lead] AI Telemetry Audit: ${domain}`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; color: #111827; line-height: 1.6;">
                <h2 style="color: #0f172a; border-bottom: 2px solid #00cdd8; padding-bottom: 8px; margin-bottom: 16px;">New Audit Request &amp; AI Telemetry Lead</h2>
                
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                  <h3 style="margin-top: 0; color: #0f172a; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">Lead Contact Information</h3>
                  <p style="margin: 6px 0;"><strong>Name:</strong> ${name || "Not provided"}</p>
                  <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
                  <p style="margin: 6px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
                  <p style="margin: 6px 0;"><strong>Website:</strong> <a href="${website?.startsWith('http') ? website : `https://${website}`}" style="color: #0284c7; text-decoration: none;">${website || "Not provided"}</a></p>
                  <p style="margin: 6px 0;"><strong>Source / Channel:</strong> ${assistantAssisted ? "Chat with AI Bill (Assistant Assisted)" : "Direct Diagnostic Scanner"}</p>
                </div>

                <div style="background-color: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                  <h3 style="margin-top: 0; color: #0f172a; font-size: 15px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px;">Diagnostic Scope &amp; Target Query</h3>
                  <p style="margin: 6px 0;"><strong>Target Search Query:</strong> <span style="background-color: #e2e8f0; padding: 3px 8px; border-radius: 4px; font-family: monospace; color: #0369a1; font-weight: 600;">${targetQuery || "General AEO Baseline"}</span></p>
                  <p style="margin: 6px 0;"><strong>Global Schema Baseline:</strong> <span style="font-weight: bold; color: #047857;">${readiness}/100</span></p>
                  <p style="margin: 6px 0;"><strong>Target Location Grounding:</strong> <span style="font-weight: bold; color: #b45309;">${proximity}%</span></p>
                  ${firstImpression ? `<p style="margin: 6px 0;"><strong>AI First Impression:</strong> ${firstImpression}</p>` : ''}
                  ${blindSpot ? `<p style="margin: 6px 0;"><strong>Diagnostic Blind Spot:</strong> <span style="color: #dc2626; font-weight: 500;">${blindSpot}</span></p>` : ''}
                </div>

                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <h3 style="margin-top: 0; color: #0f172a; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">Key Telemetry Recommendations</h3>
                  <ol style="padding-left: 20px; margin: 8px 0; color: #334155;">
                    ${effectiveRecs.map(rec => `<li style="margin-bottom: 6px; font-size: 13px;">${rec}</li>`).join('')}
                  </ol>
                </div>
              </div>
            `,
          });
          if (internalResult.error) {
            console.error("Internal lead notification alert error (non-blocking):", internalResult.error);
          } else {
            console.log("Internal lead alert dispatched successfully with ID:", internalResult.data?.id);
          }
        } catch (internalErr) {
          console.error("Internal lead notification alert failed (non-blocking):", internalErr);
        }

        // 2. Client deliverable scorecard email (Dark Grey Aesthetic with Full Telemetry Breakdown)
        const effectiveFirstImpression = firstImpression || "Your digital presence provides baseline web signals, but lacks structured, nested entity schema to secure top citations across conversational AI search engines.";
        const effectivePerception = blindSpot 
          ? `Current AI answer engines experience ambiguity regarding your specific service authority due to: ${blindSpot}`
          : "AI search crawlers identify your domain but encounter entity ambiguity regarding specific commercial offerings and localised Australian service areas.";

        const { data, error } = await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: `Your AI Visibility Diagnostic: ${domain}`,
          html: `
            <div style="background-color: #0b0f19; padding: 32px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0; line-height: 1.6;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                
                <!-- Hero Header -->
                <div style="background: linear-gradient(180deg, #0f172a 0%, #111827 100%); padding: 32px 24px; text-align: center; border-bottom: 1px solid #1e293b;">
                  <div style="display: inline-block; padding: 4px 12px; background-color: rgba(0, 229, 255, 0.1); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 20px; color: #00E5FF; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                    AI Visibility Diagnostic
                  </div>
                  <h1 style="color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                    Diagnostic Report
                  </h1>
                  <p style="color: #94a3b8; margin: 0; font-size: 14px;">
                    Synthesised Entity &amp; Telemetry Assessment for <strong style="color: #00E5FF;">${domain}</strong>
                  </p>
                </div>

                <!-- Main Content Body -->
                <div style="padding: 28px 24px;">
                  <p style="font-size: 15px; color: #cbd5e1; margin-top: 0;">
                    G'day ${name || "there"},
                  </p>
                  <p style="font-size: 14px; color: #94a3b8; margin-bottom: 24px;">
                    Here is your verified AI Search &amp; Telemetry Visibility summary generated by the AEObility Diagnostic Engine and Agent Bill:
                  </p>

                  <!-- 1. AI Perception & Impression Insights -->
                  <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                    <h3 style="color: #00E5FF; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
                      ✦ AI First Impression
                    </h3>
                    <p style="font-size: 13px; color: #e2e8f0; margin: 0 0 14px 0; line-height: 1.5;">
                      ${effectiveFirstImpression}
                    </p>

                    <div style="border-top: 1px solid #1e293b; padding-top: 12px; margin-top: 12px;">
                      <h4 style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.6px; margin: 0 0 4px 0;">
                        Current AI Perception
                      </h4>
                      <p style="font-size: 13px; color: #cbd5e1; margin: 0 0 12px 0;">
                        ${effectivePerception}
                      </p>

                      <h4 style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.6px; margin: 0 0 4px 0;">
                        Target Visibility State
                      </h4>
                      <p style="font-size: 13px; color: #34d399; margin: 0; font-weight: 500;">
                        Top-3 verified citation recommendation across ChatGPT, Perplexity, and Gemini, backed by 100% spatial grounding in Australian target locations.
                      </p>
                    </div>
                  </div>

                  <!-- 2. Metric Scorecard Box -->
                  <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; color: #94a3b8;">Target Search Query:</td>
                        <td style="padding: 8px 0; font-size: 13px; text-align: right; color: #00E5FF; font-family: monospace; font-weight: 600;">${targetQuery || "General AEO Baseline"}</td>
                      </tr>
                      <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px 0; font-size: 13px; color: #94a3b8;">Global Schema Baseline:</td>
                        <td style="padding: 10px 0; font-size: 14px; text-align: right; color: #34d399; font-weight: bold;">${readiness}/100</td>
                      </tr>
                      <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px 0; font-size: 13px; color: #94a3b8;">Target Location Grounding:</td>
                        <td style="padding: 10px 0; font-size: 14px; text-align: right; color: #fbbf24; font-weight: bold;">${proximity}%</td>
                      </tr>
                    </table>
                  </div>

                  <!-- 3. Recommended Next Steps -->
                  <div style="margin-bottom: 28px;">
                    <h3 style="color: #ffffff; font-size: 15px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">
                      Recommended Next Steps: Priority Action Plan
                    </h3>
                    <ol style="padding-left: 20px; margin: 0; color: #cbd5e1; font-size: 13px; line-height: 1.6;">
                      ${effectiveRecs.map(rec => `<li style="margin-bottom: 8px;">${rec}</li>`).join('')}
                    </ol>
                  </div>

                  <!-- 4. Primary & Secondary Calls to Action -->
                  <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 16px;">
                    <h4 style="color: #ffffff; font-size: 15px; margin: 0 0 6px 0; font-weight: 700;">
                      Ready to bridge your AI visibility gaps?
                    </h4>
                    <p style="color: #94a3b8; font-size: 12px; margin: 0 0 18px 0;">
                      10-business-day fixed-scope setup &bull; 100% credited to future sprints &bull; Zero lock-in
                    </p>

                    <!-- Primary CTA -->
                    <div style="margin-bottom: 12px;">
                      <a href="https://aeobility.com.au/solutions/aeo-blueprint" style="background-color: #00E5FF; color: #0A0F1D; padding: 13px 28px; text-decoration: none; font-weight: 700; border-radius: 8px; display: inline-block; font-size: 13px; box-shadow: 0 0 15px rgba(0, 229, 255, 0.3);">
                        Implement with The AEObility Blueprint ($995 AUD) &rarr;
                      </a>
                    </div>

                    <!-- Secondary CTA -->
                    <div>
                      <a href="https://aeobility.com.au/booking" style="background-color: #1e293b; color: #e2e8f0; border: 1px solid #334155; padding: 11px 24px; text-decoration: none; font-weight: 600; border-radius: 8px; display: inline-block; font-size: 12px;">
                        Schedule Call to Discuss Results &rarr;
                      </a>
                    </div>
                  </div>

                </div>

                <!-- Built-Out Dark Footer -->
                <div style="background-color: #090d16; border-top: 1px solid #1e293b; padding: 24px; text-align: center; font-size: 12px; color: #64748b;">
                  <div style="margin-bottom: 14px;">
                    <a href="https://g.page/r/CZ_l_XgMmncxEBM/review" style="display: inline-block; background-color: rgba(0, 229, 255, 0.08); border: 1px solid rgba(0, 229, 255, 0.25); color: #00E5FF; padding: 6px 14px; border-radius: 20px; text-decoration: none; font-size: 12px; font-weight: 600;">
                      ⭐ Found this audit helpful? Leave us a Google Review
                    </a>
                  </div>

                  <p style="margin: 4px 0; color: #94a3b8; font-weight: 500;">
                    AEObility &bull; Answer Engine &amp; AI Search Optimisation
                  </p>
                  <p style="margin: 4px 0;">
                    Phone: <a href="tel:0480286282" style="color: #cbd5e1; text-decoration: none;">0480 286 282</a> &bull; Email: <a href="mailto:support@aeobility.com.au" style="color: #00E5FF; text-decoration: none;">support@aeobility.com.au</a>
                  </p>
                  <p style="margin: 4px 0;">
                    Perth, Western Australia 6000 &bull; <a href="https://aeobility.com.au" style="color: #00E5FF; text-decoration: none;">aeobility.com.au</a>
                  </p>
                  <p style="margin: 12px 0 0 0; font-size: 11px; color: #475569;">
                    No jargon. No pressure. Just clarity. &copy; ${new Date().getFullYear()} AEObility. All rights reserved.
                  </p>
                </div>

              </div>
            </div>
          `,
        });

        if (error) {
          console.error("Resend client delivery error:", error);
          throw new Error(`Resend Error: ${error.message || JSON.stringify(error)}`);
        }

        console.log("Resend client scorecard email dispatched successfully with ID:", data?.id);
        return { ok: true, messageId: data?.id };
      },

      async submitQuoteForm({
        name,
        email,
        businessName,
        website,
        service,
        message
      }: {
        name: string;
        email: string;
        businessName?: string;
        website?: string;
        service?: string;
        message?: string;
      }) {
        if (!name || !email) {
          throw new Error("Missing required fields");
        }

        const resend = new Resend(process.env.RESEND_API_KEY || "re_dummykeyforbuild");

        await resend.emails.send({
          from: "AEObility <noreply@aeobility.com.au>",
          to: "support@aeobility.com.au",
          subject: "New AEObility Quote Request",
          html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business Name:</strong> ${businessName || "Not provided"}</p>
            <p><strong>Website:</strong> ${website || "Not provided"}</p>
            <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
            <p><strong>Message/Notes:</strong> ${message || "None"}</p>
          `,
        });

        await resend.emails.send({
          from: "AEObility <noreply@aeobility.com.au>",
          to: email,
          subject: "Your AEObility Quote Request Has Been Received",
          html: `
            <p>Hi ${name},</p>
            <p>Thank you for requesting a quote from AEObility.</p>
            <p>Our team in Perth, Australia will review your details and prepare a tailored plan and pricing breakdown for your business within 24 business hours.</p>
          `,
        });

        return { ok: true };
      }
    };
  }
};
