const mongoose = require('mongoose');


//Mongo schema
const Schema = mongoose.Schema;
const AddIssueSchema = new Schema({
    name: String,
    id: Number,
    assigned: Date,
    status: Boolean,
    severity: String,
    description: String
});

//Model
const AddIssue = mongoose.model('AddIssue', AddIssueSchema);

module.exports = AddIssue;