/*

File name: server.js

Purpose: 
  This file will serve up the Fixit webapp


  
    Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID


*/

// Import third party modules

import http from "http";
import app from "./app/app.js";

const server = http.createServer(app);
const PORT = normalizePort(process.env.PORT || 3000);
app.set("port", PORT);

server.listen(PORT);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
