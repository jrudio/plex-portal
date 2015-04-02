OrdersController = AppController.extend({
  waitOn: function() {
    return this.subscribe('plexCustomer');
  },
  data: {
    orders: PlexCustomers.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

OrdersController.events({
});
