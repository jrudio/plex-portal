Meteor.publishComposite('plexCustomers', function(){
  return {
    find: function(){
      // Show all for now - development
      return PlexCustomers.find()
    }
  };
});