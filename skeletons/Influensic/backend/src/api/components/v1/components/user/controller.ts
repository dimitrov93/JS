import { Request, Response } from "express";
// Services
import {
  validateObjectKeys,
  ResponseMessage,
} from "../../../../../services/helper";
// Models
import { User, ResponseUser, UserType } from "./model";

export const fetch = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.query, ["id"])) {
    const user: UserType | null = await User.findOne({ _id: req.data.id });

    res.status(200).json(
      ResponseMessage.SUCCESS({
        user: new ResponseUser(user).getUser(),
      })
    );

    return;
  }

  const user: UserType | null = await User.findOne({ _id: req.query.id });

  res.status(200).json(
    ResponseMessage.SUCCESS({
      user: new ResponseUser(user).getUser(),
    })
  );

  return;
};

export default { fetch };
