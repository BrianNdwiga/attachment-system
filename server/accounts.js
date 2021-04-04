myPostSubmitFunc = function(userId, info) {
    console.log(info);
    Roles.addUsersToRoles(userId, ['intern'])
}

AccountsTemplates.configure({
    postSignUpHook: myPostSubmitFunc,
})