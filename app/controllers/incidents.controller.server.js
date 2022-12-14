/*

File name: incidents.controller.server.js

Purpose: 
  Controllers for incidents - creation, deletion, editting, etc

*/

import incidentsModel from "../models/incidents.js";
import { administrator, userName } from "../utils/utils.js";

export function AddTicketsPage(req, res, next) {
  res.render("index", {
    title: "Add Ticket",
    page: "addticket",
    incidents: {},
    displayName: userName(req),
    userType: administrator(req) 
  });
}

export function ProcessTicketsAddPage(req, res, next) {

  let today = new Date().toLocaleDateString(undefined, {
    day:   '2-digit',
    month: '2-digit',
    year:  'numeric',
});

let narrativeUpdate = 
`

INCIDENT CREATED ON: ${today}
New Description: ${req.body.description}
New Priority: ${req.body.priority}
New Customer Information: ${req.body.customerInformation}
New Status: ${req.body.status}
`

  let newIncident = incidentsModel({
    recordNumber: req.body.recordNumber,
    description: req.body.description,
    priority: req.body.priority,
    narrative: narrativeUpdate,
    customerInformation: req.body.customerInformation,
    status: "NEW"
  });
  incidentsModel.create(newIncident, (err, Incident) => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.redirect("/tickets");
  });
}

export function DisplayIncidentsEditPage(req, res, next) {
  let id = req.params.id;
  console.log(id);

  incidentsModel.findById(id, (err, Incident) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    console.log(Incident);

    res.render("index", {
      title: "Edit Incident",
      page: "addticket",
      incidents: Incident,
      displayName: userName(req),
      userType: administrator(req) 

    });
  });
}

export function ProcessIncidentsEditPage(req, res, next) {
  let id = req.params.id;

  let today = new Date().toLocaleDateString(undefined, {
    day:   '2-digit',
    month: '2-digit',
    year:  'numeric',
});

  let narrativeUpdate = 
  `
  
UPDATE ON: ${today} of ${req.body.recordNumber}
ID: ${id}
New Description: ${req.body.description}
New Priority: ${req.body.priority}
New Customer Information: ${req.body.customerInformation}
New Status: ${req.body.status}
`

  console.log(req.body.status);

  let newIncident = incidentsModel({
    _id: id,
    recordNumber: req.body.recordNumber,
    description: req.body.description,
    priority: req.body.priority,
    narrative: req.body.narrative + narrativeUpdate,
    customerInformation: req.body.customerInformation,
    status: req.body.status
  });

  console.log(newIncident);

  incidentsModel.updateOne({ _id: id }, newIncident, (err, Incident) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/tickets");
  });
}

export function ProcessIncidentsDeletePage(req, res, next) {
  let id = req.params.id;

  incidentsModel.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/tickets");
  });
}
