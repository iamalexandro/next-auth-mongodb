import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is requiered"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"],
  },
  password: {
    type: String,
    required: [true, "Password is requiered"],
    select: false,
  },
  fullname: {
    type: String,
    required: [true, "Fullname is requiered"],
    minLength: [3, "Fullname must be at least 3 character"],
    maxLength: [50, "Fullname must be at most 50 character"],
  },
});

const User = models.User || model("User", userSchema);
export default User;
