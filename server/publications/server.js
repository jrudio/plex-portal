Meteor.publishComposite('servers', function(){
  return {
    find: function(){
      return Servers.find({available: true}, { sort: { createdAt: -1 }});
    },
    children: [{
      find: function(){
        // Return everything for now to determine what I need to return
        return PlexCustomers.find({ $and: [{ userId: this.userId }, {paymentSuccess: true}] }, { fields: { serverId: 1, userId: 1, paymentSuccess: 1 }});
      }
    }]
  };
});