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