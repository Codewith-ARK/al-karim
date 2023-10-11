const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Bluebird = require("bluebird");

const UserSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await Bluebird.promisify(bcrypt.hash)(
      this.password,
      salt
    );
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
