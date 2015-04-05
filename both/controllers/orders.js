OrdersController = AppController.extend({
  waitOn: function() {
    return this.subscribe('plexCustomer');
  },
  data: {
    orders: PlexCustomers.find({}),
    currentUsername: function(){
      return Meteor.user().username;
    }
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

OrdersController.events({
});
