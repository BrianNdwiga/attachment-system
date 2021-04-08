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

Session.setDefault('key', false);
// events
Template.allPostings.events({
    "click .js-show-liked" (event) {
        event.preventDefault();
        Session.set("showLiked", true);
        console.log("saved");
    },
    "change #checker": function(event) {
        Applications.update(this._id, { $set: { checked: !this.checked } });
    }
});