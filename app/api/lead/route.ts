import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("LEAD RECEIVED:", body);

    const { type, payload } = body;

    if (!type || !payload) {
      return NextResponse.json(
        { error: "Missing type or payload" },
        { status: 400 }
      );
    }

    let subject = "";
    let html = "";

    /* =========================
       CONTACT FORM
    ========================= */
    if (type === "contact") {
      const { name, email, phone = "", message } = payload;

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: "Missing required contact fields" },
          { status: 400 }
        );
      }

      subject = "📩 New Contact Message – EuConnekt";

      html = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
    }

    /* =========================
       FREE ASSESSMENT
    ========================= */
    if (type === "free-assessment") {
      const {
        name,
        email,
        phone = "",
        occupation = "",
        experience = "",
        qualifications,
      } = payload;

      if (!name || !email || !qualifications) {
        return NextResponse.json(
          { error: "Missing required assessment fields" },
          { status: 400 }
        );
      }

      subject = "📝 New Free Eligibility Assessment – EuConnekt";

      html = `
        <h2>New Free Eligibility Assessment</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Occupation:</strong> ${occupation || "-"}</p>
        <p><strong>Experience:</strong> ${experience || "-"}</p>

        <hr />

        <p><strong>Qualifications & Background:</strong></p>
        <p>${qualifications}</p>
      `;
    }

    if (!subject || !html) {
      return NextResponse.json(
        { error: "Invalid lead type" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "EuConnekt <no-reply@syncode.ie>",
      to: [process.env.CONTACT_EMAIL!],
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("LEAD API ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
