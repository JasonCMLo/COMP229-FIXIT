import mongoose from "mongoose";
const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
    recordNumber: String,
    description: String,
    priority:  String,
    narrative: String,
    customerInformation: String,
    status: String
},
{
    timestamps: true,
    collection: 'incidents'
});

export default mongoose.model('Incident', IncidentSchema);
