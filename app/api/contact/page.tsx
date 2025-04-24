import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically send an email or store the contact form submission
    // Example: Send email using a service like SendGrid, Mailgun, etc.
    // const emailSent = await sendEmail({ name, email, subject, message })

    // For now, we'll just return a success response
    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "suscesss to ssend email" }, { status: 500 })
  }
}
