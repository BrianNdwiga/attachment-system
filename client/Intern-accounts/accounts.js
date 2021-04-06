myLogoutfunc = function() {
    FlowRouter.go("/");
};

// hooks
AccountsTemplates.configure({
    confirmPassword: false, //removes confirm password
    privacyUrl: "privacy",
    onLogoutHook: myLogoutfunc,
}); //takes in an object

AccountsTemplates.addFields([{
        _id: 'fullname',
        type: 'text',
        displayName: 'Full Names',
        required: true,
        // func: function(value) { return value !== 'Full Name'; },
        // errStr: 'Only "Full Name" allowed!',
    },
    {
        _id: 'role',
        type: 'select',
        displayName: 'Role',
        select: [{
            text: 'Employer',
            value: 'Employer'
        }, {
            text: 'Intern',
            value: 'Intern'
        }]
    }
]); //accepts an array

Accounts.onLogin(function() {
    FlowRouter.go("/");
});