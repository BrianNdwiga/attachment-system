import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("applications");

Template.saved.helpers({
    applications: function() {
        return Applications.find();
    },
    showLiked() {
        return Session.get('showLiked');
    }
});