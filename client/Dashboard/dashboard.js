// import moment from 'moment'
import "../../lib/collections";
import { Meteor } from "meteor/meteor";

// total
Template.content.helpers({
    applicationsCount: function() {
        return Applications.find().count();
    }
});
Template.content.helpers({
    usersCount: function() {
        return Meteor.users.find().count();
    }
});

Template.subscriptions.helpers({
    emails: function() {
        return Emails.find();
    }
});