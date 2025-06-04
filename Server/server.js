const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    require("dotenv").config();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to yourself
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: "your-email@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    // 2. Thank-you email to user
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Thank you for contacting The Arts Interior",
      text: `Hi ${name},\n\nThank you for contacting The Arts Interior. Your request will be reviewed soon by our team.\n\nBest regards,\nThe Arts Interior Team`,
    });

    res.status(200).send({ success: true, message: "Emails sent!" });
  } catch (err) {
    console.error("Email send failed:", err); // 👈 log full error
    res.status(500).send({ success: false, message: "Failed to send emails." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
