Template.MainNav.events({
    'click .logout': () => {
        AccountsTemplates.logout(); //here the hook is aware
    }
})

Template.MainNav.helpers({
        username: function() {
            if (Meteor.user()) {
                return Meteor.user().username;
            } else {
                return " ";
            }
        },
    })
    // not used
Template.MainNav.helpers({
    admin: function() {
        return Roles.userIsInRole(Meteor.userId(), 'admin');
    }
});