Meteor.publishComposite('plexCustomer', function(){
  return {
    find: function(){
      // Get current users' orders
      return PlexCustomers.find({ userId: this.userId });
    },
    children: [{
      find: function(order){
        // Get linked server to see updated prices
        return Servers.find({ serverId: order.serverId  }, { limit: 1});
      }
    }]
  };
});