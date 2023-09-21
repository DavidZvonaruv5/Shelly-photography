import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {

    const reqbody = await request.json();

    const transporter = createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'shelly.shoval@gmail.com',
        subject: 'New message from My Photography Website',
        text: `
      Name: ${reqbody['name']}
      Email: ${reqbody['email']}
      Message: ${reqbody['message']}
    `
    };
    const thankSender = {
        from: process.env.EMAIL_USER,
        to: reqbody['email'],
        subject: `Thank you for contacting me ${reqbody['name']}!`,
        text: `
      I will get back to you as soon as possible, Shelly Shoval.
    `
    };

    try {
        await transporter.sendMail(mailOptions)
        await transporter.sendMail(thankSender)
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Email failed to send' }, { status: 500 })
    }

}