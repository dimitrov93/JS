import { Request, Response } from "express";
// Services
import { ResponseMessage } from "../../../services/helper";

export const v1 = (req: Request, res: Response) => {
  res
    .status(200)
    .json(ResponseMessage.SUCCESS({ __v: "0.0.1", release: "beta" }));
};

export default { v1 };
