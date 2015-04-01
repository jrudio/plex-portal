ServerController = AppController.extend({
  waitOn: function() {
    return [Meteor.subscribe('servers'), Meteor.subscribe('plexCustomers')];
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