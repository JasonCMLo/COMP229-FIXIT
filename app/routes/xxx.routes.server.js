/*

File name: xxx.routes.server.js

Purpose: All the routes related to the xxx controller

*/

import { Router } from "express";

import { homePage } from "../controllers/xxx.controller.server.js";

const router = Router();

router.get("/", homePage);

export default router;
