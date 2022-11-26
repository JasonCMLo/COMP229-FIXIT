/*

File name: site.controller.server.js

Purpose: 
  Controllers to manage general site navigation and handling


*/

import incidentsModel from "../models/incidents.js";
import { userName } from "../utils/utils.js";

export function contactPage(req, res, next) {
  res.render("index", {
    title: "Contact",
    page: "contact",
  });
}

export function dashboardPage(req, res, next) {
  res.render("index", {
    title: "Dashboard",
    page: "dashboard",
  });
}

export function ticketsPage(req, res, next) {
  incidentsModel.find(function(err, incidentsCollection) {
    if(err){
      console.error(err);
      res.end(err);
    }
  
  res.render("index", {
    title: "Tickets",
    page: "tickets",
    incidents: incidentsCollection,
    displayName: userName(req)
  });
  
});
}
