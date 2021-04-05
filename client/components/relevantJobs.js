import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("applications");

Template.otherJobs.helpers({
    applications: function() {
        return Applications.find();
    }
});