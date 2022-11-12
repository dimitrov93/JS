import { IUser } from "./user";

export interface ITheme {
    themeName: String;
    subscribers: string[];
    userId: IUser;
    posts: string[];
    createdAt: string;
}