// import moment from 'moment'
import "../../../lib/collections";
import { Meteor } from "meteor/meteor";

Template.users.onCreated(function() {
    this.autorun(() => {
        // arrow function allows this
        this.subscribe('allUsers');
    });
});

Template.users.helpers({
    users: function() {
        return Meteor.users.find();
    },
    userEmail: function() {
        return this.emails[0].address;
        // looks at current emaul
    },
    roles: function() {
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : 'normal';
    },
    dateFormat: function() {
        return moment(this.createdAt).format('MMM D YYYY');
        // by using the moment package to parse the date format
    },
    editMode: function() {
        return Session.get('currentUser') ? 'edit-mode' : '';
        // check if current user has a value and turns on edit mode
    },
    currentEdit: function() {
        let user = Session.get('currentUser');
        return user.id === this.id;
        // looks at current user and ask if current id is in the session data
    }
});

Template.users.events({
    'click .user_id': function() {
        // console.log(this);
        Session.set('currentUser', this);
    },
    'click .toggle-admin': function() {
        Meteor.call('toggleAdmin', this._id);
        // we are calling the method by meteor.call to change the role from the server side
    },
    'click .close-edit-mode': function() {
        Session.set('currentUser', null);
    },
    'click .delete': function(event) {
        Meteor.users.remove(this._id);
    }
});