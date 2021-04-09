import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("applications");

// helpers
// to display the form contents.
Template.allPostings.helpers({
    applications: function() {
        return Applications.find({}, { sort: { createdAt: -1 } });
    },
});
// events
Template.allPostings.events({
    "change #checker": function(event) {
        Applications.update(this._id, { $set: { checked: !this.checked } });
    }
});