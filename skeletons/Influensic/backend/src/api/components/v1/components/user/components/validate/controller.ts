import { Request, Response } from "express";
// Services
import {
  validateObjectKeys,
  ResponseMessage,
} from "../../../../../../../services/helper";
// Models
import { User } from "../../model";

const username = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.query, ["username"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user = await User.findOne({ username: req.query.username });

  if (!user) {
    res.status(200).json(ResponseMessage.SUCCESS({ registered: false }));
    return;
  }

  res.status(200).json(ResponseMessage.SUCCESS({ registered: true }));
};

const email = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.query, ["email"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user = await User.findOne({ email: req.query.email });

  if (!user) {
    res.status(200).json(ResponseMessage.SUCCESS({ registered: false }));
    return;
  }

  res.status(200).json(ResponseMessage.SUCCESS({ registered: true }));
};

const token = async (req: Request, res: Response) => {
  res.status(200).json(ResponseMessage.SUCCESS({ active: true }));
};

export default { username, email, token };
