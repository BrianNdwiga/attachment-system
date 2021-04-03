import { Accounts } from 'meteor/accounts-base'
import { Meteor } from "meteor/meteor";
Meteor.methods({
    createNewUsers: function(email, password, username) {
        Accounts.createUser({
            password: password,
            username: username,
            email: email,
        });
    },
});