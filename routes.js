// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", { main: "Home" });
    }
});

// Search Page
FlowRouter.route('/search', {
    name: 'search',
    action() {
        BlazeLayout.render("HomeLayout", { main: "search" });
    }
});

// Application Page
FlowRouter.route('/id', {
    name: 'application',
    action() {
        BlazeLayout.render("HomeLayout", { main: "application" });
    }
});

// Employer Page
FlowRouter.route('/employer', {
    name: 'application',
    action() {
        BlazeLayout.render("HomeLayout", { main: "employer" });
    }
});

// Employercontactpage Page
FlowRouter.route('/employer/contactpage', {
    name: 'employerContactPage',
    action() {
        BlazeLayout.render("HomeLayout", { main: "employerContactPage" });
    }
});
// login Page
FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render("AppLayout", { main: "accounts" });
    }
});


//Admin Dashboard Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("HomeLayout", { main: "dashboard" });
    }
});