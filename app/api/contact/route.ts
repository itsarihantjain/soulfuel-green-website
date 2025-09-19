import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { createClient } from "@/lib/supabase/server" // Import the server-side Supabase client

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, company, message } = formData

    // Initialize Supabase client
    const supabase = createClient()

    // Insert data into Supabase
    const { data, error: supabaseError } = await supabase
      .from("contacts") // Assuming you have a 'contacts' table
      .insert([
        {
          full_name: name,
          email_address: email,
          company_name: company,
          message: message,
        },
      ])

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError)
      // You might still want to try sending the email even if DB insert fails
    } else {
      console.log("Contact form data saved to Supabase:", data)
    }

    // Create a Nodemailer transporter using your SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number.parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      secure: process.env.EMAIL_SERVER_PORT === "465",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Define the email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
      to: "sweta.soulfuel@gmail.com, support.soulfuel@gmail.com",
      subject: "New Message from Soulfuel Website Contact Form",
      html: `
        <p>Hi team,</p>
        <p>This message is from the Soulfuel website contact form.</p>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Message sent and saved successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 })
  }
}
