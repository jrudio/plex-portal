PlexCustomers = new Mongo.Collection('plex_customers');

var plexCustomersSchema = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function(){
      return moment.utc().toDate();
    }
  },
  serverId: {
    type: String,
    label: 'Id of requested server',
    min: 17,
    optional: false
  },
  userId: {
    type: String,
    label: 'Id of user requesting server',
    min: 17,
    optional: false
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
  plexPin: {
    type: String,
    label: 'PIN for plex app',
    max: 4
  },
  paymentSuccess: {
    type: Boolean,
    label: 'True/False: Stripe payment successful?',
    optional: false
  },
  stripeEmail: {
    type: String,
    label: 'Email used for stripe',
    optional: true
  },
  clientIp: {
    type: String,
    label: 'IP from Stripe payment(Possibly cross-check with current-user IP)',
    regEx: SimpleSchema.RegEx.IPv4,
    optional: true
  },
  paymentTime: {
    type: Date,
    label: 'Time of successful payment',
    optional: true
  }
});

PlexCustomers.attachSchema(plexCustomersSchema);

PlexCustomers.before.insert(function(userId, doc){

});