var user = Fake.user();
Factory.define('user', Meteor.users, {
  username: function(){
    return user.fullname;
  },
  emails: function(){
    var emails = [];

    // Push email & verification
    var emailObject = {};
    emailObject.address = user.email;
    emailObject.verified = Random.choice([true, false]);

    emails.push(emailObject);

    return emails;
  },
  createdAt: function(){
    return Date();
  }
});