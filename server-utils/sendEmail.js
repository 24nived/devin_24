const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,  // Your Gmail address
      pass: process.env.SMTP_PASS,  // Your App Password
    },
  });

  await transporter.sendMail({
    from: `NIVED <${process.env.SMTP_USER}>`,
    to: options.to,
    subject: 'Devin - Account Verification',
    html: options.html,
  });

  console.log("Email sent successfully!");
};

module.exports = sendEmail;
