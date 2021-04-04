import { Mongo } from 'meteor/mongo'
Applications = new Mongo.Collection("applications")

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