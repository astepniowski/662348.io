import os
import resend

resend.api_key = os.getenv("RESEND_API_KEY")


def send_contact_email(email, message):
    resend.Emails.send({
        "from": "Portfolio <onboarding@resend.dev>",
        "to": "aidan.stepniowski@gmail.com",
        "subject": f"New message from {email}",

        "html": f"""
        <div>
            <h2>New Message</h2>
            <p>From: {email}</p>
            <p>Message: {message}</p>
        </div>
        """
    })