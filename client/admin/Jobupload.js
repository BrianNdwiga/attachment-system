import "../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("applications");
// inserting data
Template.form.events({
        "submit form": function(event, template) {
            var companyName, companyDescription, jobType, jobTitle,
                referenceNumber, jobDescription, qualifications, link,
                deadline, location, contact, logoUrl;

            companyName = event.target.companyName.value,
                companyDescription = event.target.companyDescription.value,
                jobType = event.target.jobType.value,
                jobTitle = event.target.jobTitle.value,
                referenceNumber = event.target.referenceNumber.value,
                jobDescription = event.target.jobDescription.value,
                qualifications = event.target.qualifications.value,
                howtoapply = event.target.howtoapply.value,
                link = event.target.link.value,
                deadline = event.target.companyName.value,
                location = event.target.location.value,
                contact = event.target.contact.value,
                logoUrl = event.target.logoUrl.value,


                // console.log("name:" + companyName);
                Applications.insert({
                    companyName: companyName,
                    companyDescription: companyDescription,
                    jobType: jobType,
                    jobTitle: jobTitle,
                    referenceNumber: referenceNumber,
                    jobDescription: jobDescription,
                    qualifications: qualifications,
                    link: link,
                    deadline: deadline,
                    location: location,
                    contact: contact,
                    logoUrl: logoUrl,
                    likes: 0,
                    likers: [],
                    createdOn: new Date(),
                });
            event.target.companyName.value = "";
            event.target.companyDescription.value = "";
            event.target.jobType.value = "";
            event.target.jobTitle.value = "";
            event.target.referenceNumber.value = "";
            event.target.jobDescription.value = "";
            event.target.qualifications.value = "";
            event.target.link.value = "";
            event.target.deadline.value = "";
            event.target.location.value = "";
            event.target.contact.value = "";
            event.target.logoUrl.value = "";
            event.preventDefault();
            console.log("Form submitted");
            // console.log(event.type);
            alert('Job Application Uploaded')
            return false;
        }
    })
    // table
Template.table.helpers({
    applications: function() {
        return Applications.find();
    }
});

Template.table.events({
    'click .js-del': function(event) {
        Applications.remove(this._id);
    }
});