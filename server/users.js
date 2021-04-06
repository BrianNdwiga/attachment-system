Meteor.publish('allUsers', function() {
    if (Roles.userIsInRole(this.userId, 'admin'))
        return Meteor.users.find({});
    //all users are viewed by the admin only
})