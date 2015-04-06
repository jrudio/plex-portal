Template.registerHelper('convertAccessType', function(accessType){
  var accessType = accessType;
  switch(accessType){
    case 1:
      accessType = 'minute(s)';
      break;
    case 2:
      accessType = 'hour(s)';
      break;
    case 3:
      accessType = 'day(s)';
      break;
    case 4:
      accessType = 'month(s)';
      break;
    case 5:
      accessType = 'indefinite';
      break;
    case 6:
      accessType = 'onDemand';
      break;
    default:
      accessType = 'minute(s)';
  };
  return accessType;
});

Template.registerHelper('rateToDollar', function(rate) {
  return rate / 100;
});

Template.registerHelper('purchased', function(_id){
  check(_id, String);
  // Return a boolean
  var currentUser = Meteor.userId();
  var currentServer = PlexCustomers.find({ $and: [{ userId: currentUser }, {serverId: _id}, { paymentSuccess: true }] }, { fields: { _id: 1 }});
  return currentServer.count() ? true : false;
});