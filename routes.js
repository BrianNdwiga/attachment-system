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
FlowRouter.route('/postings/:id', {
    name: 'application',
    action() {
        BlazeLayout.render("HomeLayout", { main: "application" });
    }
});

// allpostings Page
FlowRouter.route('/allpostings', {
    name: 'allApplications',
    action() {
        BlazeLayout.render("HomeLayout", { main: "allPostings" });
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
        BlazeLayout.render("HomeLayout", { main: "adminDashboard" });
    }
});

//Dashboard job uploads Page
FlowRouter.route('/dashboard/jobuploads', {
    name: 'frontMainSection',
    action() {
        BlazeLayout.render("DashboardLayout", { main: "uploads" });
    }
});

//users Dashboard Page
FlowRouter.route('/dashboard/users', {
    name: 'users',
    action() {
        BlazeLayout.render("DashboardLayout", { main: "usersDashboard" });
    }
});

// saved Page
FlowRouter.route('/saved', {
    name: 'saved',
    action() {
        BlazeLayout.render("HomeLayout", { main: "saved" });
    }
});