import SMTPTransport from "nodemailer/lib/smtp-transport";

const mailOptions: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_HOST_PORT),
  // secure: process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // tls: {
  //   rejectUnauthorized: false,
  // },
};

export default mailOptions;
