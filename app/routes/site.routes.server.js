/*

File name: site.routes.server.js

Purpose: 
  All the routes related to the site controller
  This will manage general site navigation and handling

    Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID
*/

import { Router } from "express";

import {
  contactPage,
  dashboardPage,
  ticketsPage,
} from "../controllers/site.controller.server.js";

import { AuthGuard } from "../utils/utils.js";

const router = Router();

router.get("/contact", contactPage);
router.get("/dashboard",AuthGuard, dashboardPage);
router.get("/tickets/:view",AuthGuard, ticketsPage);

router.get("/tickets",AuthGuard, ticketsPage);

export default router;
