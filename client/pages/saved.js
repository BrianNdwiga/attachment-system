import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("applications");

Template.saved.helpers({
    applications: function() {
        return Applications.find({ checked: true }, { sort: { number: -1 } });
    }
});