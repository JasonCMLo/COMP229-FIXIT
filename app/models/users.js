/*

File name: users.js

Purpose: 
  Mongoose model for user

  Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID

*/

import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const {PassportLocalSchema} = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    displayName: String,
    username: String,
    emailAddress: String,
    userType: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

UserSchema.plugin(passportLocalMongoose);
export default mongoose.model("User", UserSchema);
