import { Request, Response } from "express";
import Queue from "../libs/queue";

export default class EmailService {
  async store(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user: any = {
        name,
        email,
        password,
      };

      await Queue.add("RegistrationMail", { user });

      // await Queue.add("UserReport", { user });

      return res.json(user);
    } catch (error) {
      console.log("error emailService", error);
    }
  }
}
