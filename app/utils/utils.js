export function userName(req) {
  if (req.user) {
    console.log(req.user.displayName);
    return req.user.displayName;
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
