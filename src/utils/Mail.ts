import nodemailer from "nodemailer";
import mailOptions from "../config/mailOptions";

export default nodemailer.createTransport(mailOptions);
