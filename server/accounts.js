myPostSubmitFunc = function(userId, info) {
    console.log(info);
    Roles.addUSersToRoles(userId, ['intern'])
}

AccountsTemplates.configure({
    postSignUpHook: myPostSubmitFunc,
})