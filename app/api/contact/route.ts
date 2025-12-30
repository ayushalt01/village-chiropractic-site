import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, firstVisit, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Get the recipient email from environment variable, or use a default
    const recipientEmail = process.env.CONTACT_EMAIL || "info@painatlanta.com";

    // Format the email content
    const serviceText = service || "Not specified";
    const firstVisitText = firstVisit === "first-visit" 
      ? "This is my first visit" 
      : firstVisit === "returning" 
      ? "I've visited before" 
      : "Not specified";
    
    const emailContent = `
New Contact Form Submission from Pain Atlanta Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Interested In: ${serviceText}
First Visit: ${firstVisitText}
${message ? `Message:\n${message}` : ""}

---
This email was sent from the Pain Atlanta contact form.
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Pain Atlanta <onboarding@resend.dev>", // You'll need to verify your domain with Resend
      to: [recipientEmail],
      replyTo: email,
      subject: `New Contact Form: ${name} - ${serviceText}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Service Interested In:</strong> ${serviceText}</p>
            <p><strong>First Visit:</strong> ${firstVisitText}</p>
            ${message ? `<p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${message}</p>` : ""}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Pain Atlanta contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

