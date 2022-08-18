import { Request, Response } from "express";
import { service } from "../exports";

export default {
  async index(_req: Request, res: Response) {
    res.send("hello world1");
  },

  async store(req: Request, res: Response) {
    return service.store(req, res);
  },
};
