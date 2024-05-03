//import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

// creates a new instance of the Resend class, passing the Resend API key obtained from the environment variables.
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// exports an asynchronous function named POST, which handles HTTP POST requests
export async function POST(req, res) {
  // JSON data sent in the request body and extracts the email, subject, and message fields.
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    // sends an email using the Resend API's send method
    const data = await resend.emails.send({
      from: email,
      to: "yuhyunjungdev@gmail.com",
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
