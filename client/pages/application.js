import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("applications");

Template.application.helpers({
    applications: function() {
        var id = FlowRouter.getParam('id'); //grabs value from route
        return Applications.findOne({ _id: id });
    },
});