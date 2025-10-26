import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
// Models
import { ResponseMessage } from "../../../../services/helper";

const token = (req: Request | any, res: Response, next: NextFunction) => {
  if (!req.headers) {
    res.status(200).json(ResponseMessage.NO_TOKEN());
    return;
  }

  const token: string = req.headers["x-auth-token"] as string;

  if (!token) {
    res.status(200).json(ResponseMessage.NO_TOKEN());
    return;
  }

  jwt.verify(token, process.env.SECRET as string, (err: any, data: any) => {
    if (err) {
      res.status(200).json(
        new ResponseMessage(
          "INVALID_TOKEN",
          {},
          {
            message: "Token is invalid!",
          }
        )
      );
    } else {
      data.reqToken = token;
      req.data = data;
      next();
    }
  });
};

export default token;
