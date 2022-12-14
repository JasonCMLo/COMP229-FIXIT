/*

File name: incidents.js

Purpose: 
  Mongoose model for incidents

  Group Members:
  Jason Lo - 301234232
  Elif Canatan - 30145216
  KD Aklilu - 301220233 
  Amina Shariff - 301237959
  Khaled Alrusan - UNKNOWN ID

*/

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
    recordNumber: String,
    description: String,
    priority:  String,
    narrative: String,
    customerInformation: String,
    status: String,
    resolutionInformation: String
},
{
    timestamps: true,
    collection: 'incidents'
});

export default mongoose.model('Incident', IncidentSchema);
