const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Create Email Transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Option for sending email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    send_to: options.send_to,
    subject: options.subject,
    text: options.message,
    html: "<b>Test chức năng gửi mail ứng dụng Nodejs với Nodemailer</b>",
  };

  // send email
  transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
