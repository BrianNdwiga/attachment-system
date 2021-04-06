myPostSubmitFunc = function(userId, info) {
    // console.log(info.profile.fullname);
    Roles.addUsersToRoles(userId, ['intern'])
    FlowRouter.go("/");
}

AccountsTemplates.configure({
    postSignUpHook: myPostSubmitFunc,
})