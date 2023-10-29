import { IUser } from "./interface";

export type Nullable<T> = T | null;
export type TResponseMutations = {
    message: string,
    userData: IUser 
}