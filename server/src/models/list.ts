import { Document, Schema, Model, model } from "mongoose";

export interface IListModel extends Document {
  name: string;
  items: any[];
}

export let ListSchema = new Schema({
  name: String,
  items: Array
});

export const ListModel: Model<IListModel> = model("List", ListSchema);
