import { Document, Schema, Model, model } from "mongoose";

export interface IUserModel extends Document {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  state: any;
  location: any;
  config: any;
}

export let UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  first_name: String,
  last_name: String,
  state: Object,
  location: Object,
  config: Object,
});

export const UserModel: Model<IUserModel> = model("User", UserSchema);
