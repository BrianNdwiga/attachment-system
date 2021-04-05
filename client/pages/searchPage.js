import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("applications");
// search
Template.search.helpers({
    applications: function() {
        return Applications.find();
    },
});

// total
Template.search.helpers({
    applicationsCount: function() {
        return Applications.find().count()
    }
});

// events
Template.search.events({
    'click .js-show-liked' (event) {
        event.preventDefault();
        Session.set('showLiked', true);
        console.log('saved')
    },
});