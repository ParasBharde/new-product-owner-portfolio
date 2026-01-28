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

