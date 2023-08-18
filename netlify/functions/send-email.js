const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

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
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while sending the email' }),
    };
  }
};
