/*

File name: users.controller.server.js

Purpose: 
  Controllers for users - creation, deletion, editting, etc

  Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID

*/
import express from "express";
import passport from "passport";
import User from "../models/users.js";
import router from "../routes/site.routes.server.js";
import { userName } from "../utils/utils.js";

export function loginPage(req, res, next) {
  if (!req.user) {
    res.render("index", {
      title: "Login",
      page: "login",
      messages: req.flash("error"),
      displayName: userName(req),
    });
  }
  return res.redirect("/tickets");
}
export function registerPage(req, res, next) {
  if (!req.user) {
    res.render("index", {
      title: "Register",
      page: "register",
      messages: req.flash("register error"),
      displayName: userName(req),
    });
  }
}

export function accountManagementPage(req, res, next) {

  let id = req.params.id;

  console.log(id);

  User.findById(id, (err, user) => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.render("index", {
      title: "Account Management",
      page: "modifyuser",
      messages: req.flash("error"),
      displayName: userName(req),
      account: user
    })

  })


}
// Process

export function ProcessLogin(req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    if (!user) {
      req.flash("login", "Authentication Error");
      return res.redirect("/login");
    }

    req.logIn(user, function (err) {
      if (err) {
        console.error(err);
        res.end(err);
      }

      return res.redirect("/tickets/nc");
    });
  })(req, res, next);
}
export function ProcessRegister(req, res, next) {
  let regType = "";

  console.log(req.body);

  if (req.body.adminUser) {
    regType = "Administrator";
  } else {
    regType = "User";
  }

  let newUser = new User({
    username: req.body.username,
    emailAddress: req.body.emailAddress,
    displayName: req.body.firstName + " " + req.body.lastName,
    userType: regType,
  });


  User.register(newUser, req.body.password, function (err) {
    if (err) {
      console.log("Error in registration");
      if (err.name == "UserExistsError") {
        console.error("User Already Exists!");
        req.flash("registerMessage", "register error");
      } else {
        console.log("Other error");
        console.error(err.name);
        req.flash("registerMessage", "Server Error");
      }

      return res.redirect("/register");
    }

    console.log("account created");
    return res.redirect("/");

    return passport.authenticate("local")(req, res, function () {
      console.log("account created");
      return res.redirect("/home");
    });
  });
}

export function ProcessLogout(req, res, next) {
  req.logOut(function (err) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    console.log("logged out successfully");
  });

  res.redirect("/login");
}


export function ProcessAccountManagement(req, res, next) {
  let id = req.params.id;

  console.log(req.body);

  console.log(id);

  let newUser = User({
    _id: id,
    displayName: req.body.displayName,
    userName: req.body.userName,
    emailAddress: req.body.Email
    
  });

  console.log(newUser);

  User.updateOne({ _id: id }, newUser, (err, user) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/tickets");

  })
}