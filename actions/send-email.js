import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  console.log("➡️ sendEmail called", { to, subject });

  const resend = new Resend(process.env.RESEND_API_KEY || "");

  const result = await resend.emails.send({
    from: "Finance App <onboarding@resend.dev>",
    to,
    subject,
    react,
  });

  console.log("✅ Resend result:", result);

  return result;
}
