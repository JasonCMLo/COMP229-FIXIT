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
