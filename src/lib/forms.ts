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
      }
    };
  }
};
