import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    // console.log(Applications.find().fetch());
});
Meteor.publish('applications', function() {
    return Applications.find();
});

Meteor.publish('emails', function() {
    return Emails.find();
});