import { Request, Response } from "express";
// Services
import { ResponseMessage } from "../services/helper";

const api = (req: Request, res: Response) => {
  res.status(200).json(
    ResponseMessage.SUCCESS({
      versions: ["v1"],
      status: "healthy",
    })
  );
};

export default { api };
