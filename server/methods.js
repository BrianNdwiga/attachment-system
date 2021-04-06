Meteor.methods({
    toggleAdmin(id) {
        // this._id becomes id from users.js
        if (Roles.userIsInRole(id, 'admin')) {
            Roles.removeUsersFromRoles(id, 'admin');
        } else {
            Roles.addUsersToRoles(id, 'admin');
        }
    }
})