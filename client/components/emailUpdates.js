import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("emails");
Template.emailUpdates.events({
    "submit #subscribe_popup": function(event, template) {
        var subscribeEmail;
        subscribeEmail = event.target.subscribeEmail.value,
            console.log("name:" + subscribeEmail);
        Emails.insert({
            subscribeEmail: subscribeEmail,
            createdOn: new Date()
        });
        event.target.subscribeEmail.value = "";
        event.preventDefault();
        console.log("Subscription sent");
        return false;
    }
})