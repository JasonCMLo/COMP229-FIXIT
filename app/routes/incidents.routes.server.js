/*

File name: incidents.routes.server.js

Purpose: 
  All the routes related to the incidents controller
  This will manage incidents

    Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID

*/

import { Router } from "express";

import { AddTicketsPage, 
         ProcessTicketsAddPage,
         DisplayIncidentsEditPage,
         ProcessIncidentsEditPage,
         ProcessIncidentsDeletePage } from "../controllers/incidents.controller.server.js";
import { AuthGuard } from "../utils/utils.js";

const router = Router();

router.get('/add',AuthGuard, AddTicketsPage);
router.post('/add',AuthGuard, ProcessTicketsAddPage);
router.get('/edit/:id',AuthGuard, DisplayIncidentsEditPage);
router.post('/edit/:id',AuthGuard, ProcessIncidentsEditPage);
router.get('/delete/:id',AuthGuard, ProcessIncidentsDeletePage);

export default router;
