"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(prevState: unknown, formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  try {
    await resend.emails.send({
      from: "contact@realitize.ai",
      to: "frontend.dev@realitize.ai",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `<p>${message}</p>`,
    });
    return {
      status: "success",
      message: `Thank you, ${name}, for reaching out.`,
    };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Failed to send message." };
  }
}
