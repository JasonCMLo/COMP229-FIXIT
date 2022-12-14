/*

File name: site.controller.server.js

Purpose: 
  Controllers to manage general site navigation and handling

  Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID


*/
import incidentsModel from "../models/incidents.js";
import { userName, administrator } from "../utils/utils.js";

export function contactPage(req, res, next) {
  res.render("index", {
    title: "Contact",
    page: "contact",
    displayName: userName(req),
  });
}

export function dashboardPage(req, res, next) {
  res.render("index", {
    title: "Dashboard",
    page: "dashboard",
    displayName: userName(req),
  });
}

export function ticketsPage(req, res, next) {

  let viewMode = req.params.view;

  incidentsModel.find(function(err, incidentsCollection) {
    if(err){
      console.error(err);
      res.end(err);
    }
  
  res.render("index", {
    title: "Tickets",
    page: "tickets",
    incidents: incidentsCollection,
    displayName: userName(req),
    view: viewMode,
    userType: administrator(req) 

  });
  
});
}
