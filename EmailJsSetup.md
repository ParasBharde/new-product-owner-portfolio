# EmailJS Setup (Contact Form)

EmailJS allows you to receive contact form submissions directly to your email without a backend server.

## Step 1: Create EmailJS Account

Go to https://www.emailjs.com/
Click "Sign Up" and create a free account
Verify your email address

## Step 2: Add Email Service

After logging in, go to "Email Services" in the dashboard
Click "Add New Service"
Choose your email provider:

*   Gmail (Recommended): Click "Connect Account" and authenticate with Google
*   Outlook: Follow the Microsoft authentication flow
*   Custom SMTP: Enter your SMTP server details
Give your service a name (e.g. "Airmaker Contact Service")
Copy the Service ID (looks like: service_abc123) 

## Step 3: Create Email Template

Go to "Email Templates" in the dashboard
Click "Create New Template"

Hello,

You’ve received a new message from your portfolio website.

--------------------------------------------------
SENDER DETAILS
--------------------------------------------------

Email: {{user_email}}

--------------------------------------------------
MESSAGE
--------------------------------------------------

{{user_message}}

--------------------------------------------------

This message was sent via your portfolio newsletter form.
You can reply directly to this email to respond.


Copy the Template ID (looks like: template_xyz789) 

Click "Save"

## Code Template for Email Format
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Portfolio Message</title>
</head>
<body style="margin:0; padding:0; background-color:#f5f7fa; font-family:Arial, Helvetica, sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fa; padding:20px;">
<tr>
<td align="center">
<table width="100%" max-width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08);">
<!-- Header -->
<tr>
<td style="background:#111827; color:#ffffff; padding:20px 24px;">
<h2 style="margin:0; font-size:20px;">📩 New Portfolio Message</h2>
</td>
</tr>
 
          <!-- Body -->
<tr>
<td style="padding:24px; color:#111827;">
<p style="margin:0 0 12px; font-size:14px;">
                You’ve received a new message from your portfolio website.
</p>
 
              <hr style="border:none; border-top:1px solid #e5e7eb; margin:16px 0;" />
 
              <p style="margin:0 0 6px; font-size:13px; color:#6b7280;">Sender Email</p>
<p style="margin:0 0 16px; font-size:14px; font-weight:600;">
                {{user_email}}
</p>
 
              <p style="margin:0 0 6px; font-size:13px; color:#6b7280;">Message</p>
<div style="background:#f9fafb; border:1px solid #e5e7eb; padding:14px; border-radius:6px; font-size:14px; line-height:1.5;">
                {{user_message}}
</div>
</td>
</tr>
 
          <!-- Footer -->
<tr>
<td style="padding:16px 24px; background:#f9fafb; color:#6b7280; font-size:12px; text-align:center;">
              This message was sent via your portfolio contact form.<br />
              You can reply directly to this email.
</td>
</tr>
 
        </table>
</td>
</tr>
</table>
</body>
</html>
```

## Step 4: Get Public Key

Go to "Account" → "General"
Find your Public Key (also called API Key)
Copy this key (looks like: xxxxxxxxxxxxx) 

## Step 5: Configure Environment Variables

Create a `.env` file in your project root:

    cp .env.example .env
Edit `.env` and add your EmailJS credentials:

    NEXT_PUBLIC_EMAILJS_SERVICE=service_abc123
    NEXT_PUBLIC_EMAILJS_TEMPLATE=template_xyz789
    NEXT_PUBLIC_EMAILJS_KEY=xxxxxxxxxxxxx
Save the file

Setup Complete!

