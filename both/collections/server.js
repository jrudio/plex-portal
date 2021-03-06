Servers = new Mongo.Collection('servers');

var serversSchema = new SimpleSchema({
  createdAt: {
    type: Date,
    label: 'Keep track of time when server is posted',
    optional: true
  },
  serverOwnerId: {
    type: String,
    label: 'Server Owner ID',
    min: 17,
    optional: true
  },
  serverOwner: {
    type: String,
    label: 'Server Owner\'s Name',
    min: 3,
    optional: true
  },
  available: {
    type: Boolean,
    label: 'Server is accepting new users',
    optional: true,
    defaultValue: true
  },
  accessTime: {
    type: Number,
    label: 'User access time',
    max: 999
  },
  accessTimeType: {
    type: Number,
    label: '1=minutes, 2=hours, 3=days, 4=months, 5=indefinite, and 6=onDemand',
    allowedValues: [1, 2, 3, 4, 5, 6]
  },
  rate: {
    type: Number,
    label: '$ in cents (ex. $5 = 500)',
    min: 100 /* $1 minimum */
  },
  currency: {
    type: String,
    label: 'An array of currencies(Currently USD only)',
    optional: true,
    defaultValue: 'USD'
  },
  serverName: {
    type: String,
    label: 'Server Name'
  },
  postTitle: {
    type: String,
    label: 'Post title',
    max: 20
  },
  postDescription: {
    type: String,
    label: 'Post description',
    max: 70
  }
});

Servers.attachSchema(serversSchema);

Servers.before.insert(function (userId, doc) {
  doc.createdAt = moment.utc().toDate();

  // Store rate in cents, but convert to dollar amounts on the client
  doc.rate = doc.rate;

  if(userId){
    doc.serverOwnerId = userId;
  };

  // Add current username
  doc.serverOwner = userId ? Meteor.users.findOne({ _id: userId }, { fields: { username: 1 }}).username : Fake.user().name;

  doc.serverName = doc.serverName.toLowerCase();
  doc.postTitle = encodeURIComponent(doc.postTitle);
  doc.postDescription = encodeURIComponent(doc.postDescription);
});