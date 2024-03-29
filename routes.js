const express = require("express");
const path = require("path");
const utility = require("./utils");

const router = express.Router();

// Primary Routes(links)
router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

router.get("/courses", (req, res)=>{
  res.sendFile(path.join(__dirname, "public","pages", "courses.html"))
});

router.get("/contact", (req, res)=>{
  res.sendFile(path.join(__dirname, "public","pages", "contact.html"))
});

router.get("/course_detail", (req, res)=>{
  res.sendFile(path.join(__dirname, "public", "pages","course_details", "course-detail.html"));
});

router.get("/success", (req, res)=>{
  res.sendFile(path.join(__dirname, "public", "pages","success.html"));
});

router.get("/404", (req, res)=>{
  res.sendFile(path.join(__dirname, "public", "pages", "404.html"));
});

// Secondary Routes (login/register/dashboard)
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "login.html"));
});

router.post("/login", async (req, res) => {
  const loginData = {
    email: req.sanitize(req.body.email),
    password: req.sanitize(req.body.password),
  };

  const isPasswordValid = await utility.checkPassword(loginData);
  if (!isPasswordValid) {
    res.status(401).redirect("/error");
  } else {
    res.status(200).redirect("/dashboard");
  }
});

router.get("/register", (req, res)=>{
  res.sendFile(path.join(__dirname, "public", "pages", "register.html"))
});

router.post("/register", async (req, res) => {
  // parse data from the user response
  const newUserData = {
    email: req.sanitize(req.body.email),
    password: req.sanitize(req.body.password),
    full_name: req.sanitize(req.body.fullName),
  };
  try {
    // create a new user document from the user response 
    await utility.createUser(newUserData);
    // redirect the user to login page
    res.status(200).redirect("/success");
  } catch(err){
    console.error("Error creating user:",err.message)
  }
});

router.get("/dashboard", (req, res)=>{
  res.status(200).sendFile(path.join(__dirname, "public", "pages", "dashboard.html"));
});

// Utility routes
router.get("/error", (req, res)=>{
  res.sendFile(path.join(__dirname, "public", "pages", "error.html"))
});

module.exports = router;
