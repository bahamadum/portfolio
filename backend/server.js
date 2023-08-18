const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received email request:', { name, email, message });

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider here
    auth: {
      user: process.env.GMAIL_USER, // Use environment variable
      pass: process.env.GMAIL_PASS, // Use environment variable
    },
  });

  const mailOptions = {
    from: email, // Use the sender's email captured from the form
    to: 'ibrahimssillah213@gmail.com', // Use the sender's email as the recipient
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred while sending the email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
