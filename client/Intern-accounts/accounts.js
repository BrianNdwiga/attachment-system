myLogoutfunc = function() {
    FlowRouter.go("/");
};

// hooks
AccountsTemplates.configure({
    confirmPassword: false, //removes confirm password
    privacyUrl: "privacy",
    onLogoutHook: myLogoutfunc,
}); //takes in an object

Accounts.onLogin(function() {
    FlowRouter.go("/");
});

// register event
Template.register.events({
    "submit form": function(event, template) {
        var username, email, password;
        event.preventDefault();
        email = template.find("#register-email").value;
        username = template.find("#register-username").value;
        password = template.find("#register-password").value;
        console.log("registered successfully");
        Meteor.call("createNewUsers", email, password, username);

        // Roles.addUsersToRoles(role, ['intern'])
    },
});

// login form
Template.signin.events({
    "submit form": function(event, template) {
        var emailVar, passwordVar;
        event.preventDefault();
        // username = template.find("#username").value;
        emailVar = template.find("#login-email").value;
        passwordVar = template.find("#login-password").value;
        // password2 = template.find("#password2").value;
        console.log("logged successfully");
        Meteor.loginWithPassword(emailVar, passwordVar, function(err) {
            if (err) {
                console.log(err.message);
                Session.set("errorMessage", err.message);
            } else {
                // sets alert to blank
                Session.set("errorMessage", "");
            }
        });
    },
});

// helpers
// error message
Template.signin.helpers({
    errorMessage: function() {
        return Session.get("errorMessage");
    },
});