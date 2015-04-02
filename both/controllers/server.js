ServerController = AppController.extend({
  waitOn: function() {
    return Meteor.subscribe('servers');
  },
  data: function(){
    return {
      plexCustomers: function(){
        return PlexCustomers.find({});
      }
    };
  },
  onAfterAction: function () {
    Meta.setTitle('Servers');
  }
});