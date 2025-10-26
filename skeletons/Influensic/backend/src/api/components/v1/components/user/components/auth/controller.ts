import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Services
import {
  ResponseMessage,
  validateObjectKeys,
} from "../../../../../../../services/helper";
import { fetchAPI } from "../../../../../../../services/api";
// Models
import { UserType, User } from "../../model";

/**
 * login
 * @param {Request} req The request object
 * @param {Response} res The response object
 * @returns {undefined}
 * @description Method that logs in a user
 */
const login = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.body, ["username", "password"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user: UserType | null = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    res.status(200).json(ResponseMessage.NOT_FOUND());
    return;
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(403).json(ResponseMessage.UNAUTHORIZED());
    return;
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET as string);

  res.status(200).json(ResponseMessage.SUCCESS({ token }));
};

/**
 * singup
 * @param {Request} req The request object
 * @param {Response} res The response object
 * @returns {undefined}
 * @description Method that registers a user
 */
const signup = async (req: Request, res: Response) => {
  if (
    !validateObjectKeys(req.body, ["username", "email", "fullname", "password"])
  ) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const registeredUser = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });

  if (registeredUser) {
    res.status(403).json(ResponseMessage.EXISTS());
    return;
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);

  const structure: UserType["settings"] = Object.assign({}, req.body, {
    settings: {
      appearance: { picture: false, banner: false },
      notifications: { follow: false },
      security: {
        tfa: false,
        sms: false,
      },
    },
  });

  const user = await new User(structure).save();

  const token = jwt.sign({ id: user._id }, process.env.SECRET as string);

  const project = await fetchAPI(
    "api/v1/projects",
    "POST",
    {
      name: `${user.fullname}'s Project`,
      settings: {
        shape: "circle",
        color: "#64748b",
      },
    },
    {
      "X-Auth-Token": token,
    }
  );

  if (project.status !== "SUCCESS") {
    res.status(500).json(ResponseMessage.INTERNAL_ERROR());
    return;
  }

  res.status(200).json(ResponseMessage.SUCCESS({ token }));
};

export default { login, signup };
