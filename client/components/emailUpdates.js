import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("emails");
Template.emailUpdates.events({
    "click #submit": function(event, template) {
        // var subscribeEmail;
        var subscribeEmail = $("#subscribe_pemail").val();
        // var subscribeEmail = event.target.subscribeEmail.value
        // subscribeName = event.target.subscribeName.value
        Emails.insert({
            subscribeEmail: subscribeEmail,
            // subscribeName: Name,
            createdOn: new Date()
        });
        // event.target.subscribeEmail.value = "";
        // event.target.subscribeName.value = ""
        event.preventDefault();
        console.log("Subscription sent");
        return false;
    }
})