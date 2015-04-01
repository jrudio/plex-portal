Servers = new Mongo.Collection('servers');

Servers.helpers({
  decPostTitle: function(){
    var title = decodeURIComponent(this.postTitle);
    return title;
  },
  convertAccessType: function(){
    var accessType = this.accessTimeType;
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
        accessType = 'onDemand(s)';
        break;
      default:
        accessType = 'minute(s)';
    };
    return accessType;
  }
});

var serversSchema = new SimpleSchema({
  createdAt: {
    type: Date,
    label: 'Keep track of time when server is posted',
  },
  serverOwner: {
    type: String,
    label: 'ID of server owner',
    min: 17
  },
  available: {
    type: Boolean,
    label: 'Server is accepting new users',
    defaultValue: true
  },
  accessTime: {
    type: Number,
    label: 'User/customer access time. Dependent on accessTimeType',
    max: 999
  },
  accessTimeType: {
    type: Number,
    label: '1=minutes, 2=hours, 3=days, 4=months, 5=indefinite, and 6=onDemand',
    allowedValues: [1, 2, 3, 4, 6]
  },
  rate: {
    type: Number,
    label: 'Rate - in cents - $9 === 900'
  },
  currency: {
    type: String,
    label: 'An array of currencies(Currently USD only)',
    defaultValue: 'USD'
  },
  serverName: {
    type: String,
    label: 'Name for server. Not unique'
  },
  postTitle: {
    type: String,
    label: 'Title of posting',
    max: 20
  },
  postDescription: {
    type: String,
    label: 'Description of posting',
    max: 70
  }
});

Servers.attachSchema(serversSchema);

Servers.before.insert(function (userId, doc) {
  doc.createdAt = moment.utc().toDate();
});