// import moment from 'moment'
import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Template.users.helpers({
    users: function() {
        return Meteor.users.find();
    },
    userEmail: function() {
        return this.emails[0].address;
        // looks at current emaul
    },
    dateFormat: function() {
        return moment(this.createdAt).format('MMM D YYYY')
            // by using the moment package to parse the date format
    }
});