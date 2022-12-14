/*

File name: utils.js

Purpose: 
  
  Shared functions and utilities that are leveraged across the application

    Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID

*/

export function userName(req) {
  if (req.user) {
    console.log(req.user._id);
    return req.user._id;
  }
  return "";
}

export function administrator(req) {
  if (req.user) {
    console.log(req.user.userType);
    return req.user.userType;
  }
  return "";
}

// Authentication validation

export function AuthGuard(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }

  next();
}
