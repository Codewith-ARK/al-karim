const User = require("./userSchema");
const bcrypt = require("bcrypt");

function parseReq(req) {
  // newUserData.courses = req.body.courses;
  return newUserData;
}

async function createUser(data) {
  try {
    await User.create({
      full_name: data.full_name,
      email: data.email,
      password: data.password,
    });
    return true;
  } catch (e) {
    console.log("Error adding user:", e.message);
    return false;
  }
}

async function checkPassword(data) {
  try {
    const newUser = await User.findOne({ email: data.email });
    if (!newUser) {
      return false;
    }
    const isMatch = await bcrypt.compare(data.password, newUser.password);
    return isMatch;
  } catch (error) {
    // Handle the error, e.g., log it or return false for security reasons
    return false;
  }
}

module.exports = { parseReq, createUser, checkPassword };
