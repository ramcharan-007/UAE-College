import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Try to send to Google Sheets
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_SCRIPT_ID") {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error("Google Sheets integration error:", error);
        // Continue anyway - we'll log locally
      }
    }

    // Log locally as backup (in production, use a database)
    console.log("Lead captured:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("\n=== NEW LEAD ===");
      console.log(`Name: ${data.name}`);
      console.log(`Email: ${data.email}`);
      console.log(`Phone: ${data.phone || "N/A"}`);
      console.log(`Interest: ${data.interest || "N/A"}`);
      console.log(`Source: ${data.source || "Coming Soon Page"}`);
      console.log("================\n");
    }

    // Try to send email notification
    try {
      await sendEmailNotification(data);
    } catch (error) {
      console.error("Email notification error:", error);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to capture lead" },
      { status: 500 },
    );
  }
}

async function sendEmailNotification(data: {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  source?: string;
  timestamp?: string;
}) {
  // In production, integrate with your email service (SendGrid, Resend, etc.)
  // For now, just log to console
  console.log("Email notification would be sent to: info@icasr.ae");

  // Example: Using Resend (uncomment and set RESEND_API_KEY in .env.local)
  /*
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: "noreply@icasr.ae",
    to: "info@icasr.ae",
    subject: "New Lead from Coming Soon Page",
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Interest:</strong> ${data.interest || "N/A"}</p>
      <p><strong>Source:</strong> ${data.source || "Coming Soon Page"}</p>
      <p><strong>Timestamp:</strong> ${data.timestamp}</p>
    `,
  });
  */
}
