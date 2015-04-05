OrdersController = AppController.extend({
  waitOn: function() {
    return this.subscribe('plexCustomer');
  },
  data: function(){
    var orderQuery = PlexCustomers.find({});

    return {
      hasOrders: function(){
        // return cursor count
        return orderQuery.count();
      },
      orders: function(){
        return orderQuery;
      },
      currentUsername: function(){
        return Meteor.user().username;
      }
    };
  },
  onAfterAction: function () {
    Meta.setTitle('Orders');
  }
});

OrdersController.events({
});
