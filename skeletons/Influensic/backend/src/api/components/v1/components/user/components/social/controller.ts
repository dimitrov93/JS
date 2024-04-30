import { Request, Response } from "express";
// Services
import {
  validateObjectKeys,
  ResponseMessage,
} from "../../../../../../../services/helper";
// Models
import { User, UserTypeFlexible, ResponseUser } from "../../model";

const follow = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.body, ["id"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user = await User.findOne({ _id: req.body.id });

  if (!user || req.body.id === req.data.id) {
    res.status(200).json(ResponseMessage.NOT_FOUND());
    return;
  }

  await User.findOneAndUpdate(
    { _id: req.body.id },
    {
      $addToSet: {
        followers: req.data.id,
      },
    }
  );

  const logged: UserTypeFlexible | null = await User.findOneAndUpdate(
    { _id: req.data.id },
    {
      $addToSet: {
        following: req.body.id,
      },
    },
    { new: true }
  );

  res.status(200).json(
    ResponseMessage.SUCCESS({
      user: new ResponseUser(logged).getUser(),
    })
  );
};

const unfollow = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.body, ["id"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user = await User.findOne({ _id: req.body.id });

  if (!user || req.body.id === req.data.id) {
    res.status(200).json(ResponseMessage.NOT_FOUND());
    return;
  }

  await User.findOneAndUpdate(
    { _id: req.body.id },
    {
      $pull: {
        followers: req.data.id,
      },
    }
  );

  const logged: UserTypeFlexible | null = await User.findOneAndUpdate(
    { _id: req.data.id },
    {
      $pull: {
        following: req.body.id,
      },
    },
    { new: true }
  );

  res.status(200).json(
    ResponseMessage.SUCCESS({
      user: new ResponseUser(logged).getUser(),
    })
  );
};

const block = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.body, ["id"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user = await User.findOne({ _id: req.body.id });

  if (!user || req.body.id === req.data.id) {
    res.status(200).json(ResponseMessage.NOT_FOUND());
    return;
  }

  const logged: UserTypeFlexible | null = await User.findOneAndUpdate(
    { _id: req.data.id },
    {
      $addToSet: {
        blocked: req.body.id,
      },
    },
    { new: true }
  );

  res.status(200).json(
    ResponseMessage.SUCCESS({
      user: new ResponseUser(logged).getUser(),
    })
  );
};

const unblock = async (req: Request, res: Response) => {
  if (!validateObjectKeys(req.body, ["id"])) {
    res.status(403).json(ResponseMessage.INVALID_PARAMS());
    return;
  }

  const user = await User.findOne({ _id: req.body.id });

  if (!user || req.body.id === req.data.id) {
    res.status(200).json(ResponseMessage.NOT_FOUND());
    return;
  }

  const logged: UserTypeFlexible | null = await User.findOneAndUpdate(
    { _id: req.data.id },
    {
      $pull: {
        blocked: req.body.id,
      },
    },
    { new: true }
  );

  res.status(200).json(
    ResponseMessage.SUCCESS({
      user: new ResponseUser(logged).getUser(),
    })
  );
};

export default { follow, unfollow, block, unblock };
