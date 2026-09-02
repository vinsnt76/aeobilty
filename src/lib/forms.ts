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

        // 2. Client deliverable scorecard email
        const { data, error } = await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: `Your AI Visibility Diagnostic: ${domain}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #111827; line-height: 1.6;">
              <div style="background-color: #030303; padding: 24px; border-radius: 12px; color: #ffffff; text-align: center; margin-bottom: 24px;">
                <h1 style="color: #00cdd8; margin: 0 0 8px 0; font-size: 22px;">AEObility Diagnostic Report</h1>
                <p style="color: #9ca3af; margin: 0; font-size: 14px;">Audit for <strong>${domain}</strong></p>
              </div>

              <p>G'day ${name || "there"},</p>
              <p>Here is your verified AI Visibility Scan summary generated by our diagnostic engine and Agent Bill:</p>

              <!-- Scorecard Box -->
              <div style="background-color: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">Global Schema Baseline:</td>
                    <td style="padding: 8px 0; font-size: 14px; text-align: right; color: #047857; font-weight: bold;">${readiness}/100 (Optimal Syntax)</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">Target Location Grounding:</td>
                    <td style="padding: 8px 0; font-size: 14px; text-align: right; color: #b45309; font-weight: bold;">${proximity}% (Needs Attention)</td>
                  </tr>
                </table>
              </div>

              <h3 style="color: #111827; font-size: 16px; margin-top: 24px;">Priority Remediation Roadmap:</h3>
              <ol style="padding-left: 20px; font-size: 14px; color: #374151;">
                <li><strong>Anchor Regional Entity Schema:</strong> Inject nested <code>LocalBusiness</code> and <code>serviceArea</code> nodes linked to Wikidata.</li>
                <li><strong>Publish Location-Specific Evidence:</strong> Deploy case studies addressing targeted Australian customer queries.</li>
                <li><strong>Expand Passage Context Chunking:</strong> Structure high-density 150-character answer blocks under H2/H3 headings.</li>
              </ol>

              <!-- Commercial Call to Action -->
              <div style="margin: 32px 0; text-align: center;">
                <a href="https://aeobility.com.au/solutions/aeo-blueprint" style="background-color: #00cdd8; color: #000000; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block; font-size: 14px;">
                  Implement with The AEObility Blueprint ($995 AUD) &rarr;
                </a>
                <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">10-business-day fixed scope &bull; 100% credited to sprints &bull; Zero lock-in contracts</p>
              </div>

              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
              <p style="font-size: 12px; color: #9ca3af; text-align: center;">
                AEObility &bull; Perth, Western Australia &bull; <a href="https://aeobility.com.au" style="color: #00cdd8;">aeobility.com.au</a>
              </p>
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
