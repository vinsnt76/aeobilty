import { Resend } from "resend";

export const Forms = {
  wire() {
    return {
      async submitAuditForm({ name, email, website }: { name?: string; email: string; website: string }) {
        if (!email || !website) {
          throw new Error("Missing required fields");
        }

        const resend = new Resend(process.env.RESEND_API_KEY || "re_dummykeyforbuild");

        // 1. Internal notification
        await resend.emails.send({
          from: "AEObility <noreply@aeobility.com.au>",
          to: "support@aeobility.com.au",
          subject: "New AEObility Audit Request",
          html: `
            <h2>New Audit Request</h2>
            <p><strong>Name:</strong> ${name || "Not provided"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> ${website}</p>
          `,
        });

        // 2. User confirmation
        await resend.emails.send({
          from: "AEObility <noreply@aeobility.com.au>",
          to: email,
          subject: "Your AEObility Audit Has Been Received",
          html: `
            <p>Thanks ${name || ""}! Your audit is now in the queue.</p>
            <p>You’ll receive your quick audit shortly.</p>
          `,
        });

        return { ok: true };
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
