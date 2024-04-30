import { Schema, model } from "mongoose";

interface Type {
  username: string;
  email: string;
  fullname: string;
  settings: {
    appearance: {
      picture: boolean;
      banner: boolean;
    };
    notifications: {
      follow: boolean;
    };
    security: {
      tfa: boolean;
      sms: boolean;
    };
  };
  tags: string[];
  uploads: string[];
  followers: string[];
  following: string[];
  blocked: string[];
}

interface TypeStrict extends Type {
  password: string;
}

interface TypeFlexible extends Type {
  password?: string;
}

export interface UserType extends TypeStrict {
  _id: string;
}

export interface UserTypeFlexible extends TypeFlexible {
  _id: string;
}

export class ResponseUser {
  user: UserTypeFlexible | null;

  constructor(user: UserTypeFlexible | null) {
    if (user) {
      this.user = {
        _id: user._id,
        email: user.email,
        username: user.username,
        fullname: user.fullname,
        tags: user.tags,
        uploads: user.uploads,
        followers: user.followers,
        following: user.following,
        blocked: user.blocked,
        settings: user.settings,
      };
    } else {
      this.user = null;
    }
  }

  getUser = (): UserTypeFlexible | null => {
    return this.user;
  };
}

const userSchema = new Schema<TypeStrict>({
  username: String,
  email: String,
  fullname: String,
  password: String,
  settings: {
    appearance: {
      picture: Boolean,
      banner: Boolean,
    },
    notifications: {
      follow: Boolean,
    },
    security: {
      tfa: Boolean,
      sms: Boolean,
    },
  },
  tags: [String],
  uploads: [String],
  followers: [String],
  following: [String],
  blocked: [String],
});

export const User = model<TypeStrict>("User", userSchema);
