Template.MainNav.events({
    'click .logout': () => {
        AccountsTemplates.logout(); //here the hook is aware
    }
})

Template.MainNav.helpers({
    fullname: function() {
        if (Meteor.user()) {
            return Meteor.user().profile.fullname;
        } else {
            return "anonymous internet user";
        }
    },
})