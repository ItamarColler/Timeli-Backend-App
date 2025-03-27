import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import { TABLES } from "../consts";

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    firstname: { type: String, required: true, minlength: 2 },
    lastname: { type: String, required: true, minlength: 2 },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  delete obj.__v;
  return obj;
};

const userModel = model(TABLES.USERS, userSchema);

export default userModel;
