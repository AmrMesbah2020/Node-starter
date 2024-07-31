const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendPasswordResetEmail = async (email, resetUrl) => {
  try {
    let sendResult = await transporter.sendMail({
      from: "Your App Name <yourapp@example.com>",
      to: email,
      subject: "Password Reset Request",
      html: `<div>
<p>Dear user,</p>
<p>You have requested to reset your password. Please click on the button below to reset your password:</p>
<a href=${resetUrl} target="_blank" class="button">Reset Password</a>
<p>If you did not make this request, you can ignore this email.</p>
<p>Best Regards,<br>Your App Name</p></div>`,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendPasswordResetEmail };

