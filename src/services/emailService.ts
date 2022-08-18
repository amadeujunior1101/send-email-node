import { Request, Response } from "express";
import registrationEmail from "../config/registrationEmail";

export default class EmailService {
  async store(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user = {
        name,
        email,
        password,
      };

      await registrationEmail(user);

      return res.json(user);
    } catch (error) {
      console.log("error emailService", error);
    }
  }
}
