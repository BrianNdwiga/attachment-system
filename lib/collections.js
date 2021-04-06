import { Mongo } from 'meteor/mongo'
Applications = new Mongo.Collection("applications")
Emails = new Mongo.Collection("emails")

Applications.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

Emails.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});
Meteor.users.allow({
    insert: function() {
        //Normally I would check if (this.userId) to see if the method is called by logged in user or guest
        //you can also add some checks here like user role based check etc.,
        return true;
    },
    update: function() {
        //similar checks like insert
        return true;
    },
    remove: function() {
        //similar checks like insert
        return true;
    }
});