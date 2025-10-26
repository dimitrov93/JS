import { Request, Response } from "express";
// Services
import {
  validateObjectKeys,
  ResponseMessage,
} from "../../../../../../../services/helper";
// Models
import { User, UserTypeFlexible, ResponseUser } from "../../model";

const appearance = async (req: Request, res: Response) => {
  if (
    !validateObjectKeys(req.body, ["username", "email", "picture", "banner"])
  ) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user: UserTypeFlexible | null = await User.findOneAndUpdate(
    {
      _id: req.data.id,
    },
    {
      $set: {
        username: req.body.username,
        email: req.body.email,
        "settings.appearance": req.body,
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json(ResponseMessage.SUCCESS({ user: new ResponseUser(user).getUser() }));
};

const notifications = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.body, ["follow"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user: UserTypeFlexible | null = await User.findOneAndUpdate(
    { _id: req.data.id },
    {
      $set: {
        "settings.notifications": req.body,
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json(ResponseMessage.SUCCESS({ user: new ResponseUser(user).getUser() }));
};

const security = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.body, ["tfa", "sms"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user: UserTypeFlexible | null = await User.findOneAndUpdate(
    { _id: req.data.id },
    {
      $set: {
        "settings.security": req.body,
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json(ResponseMessage.SUCCESS({ user: new ResponseUser(user).getUser() }));
};

export default { appearance, notifications, security };
