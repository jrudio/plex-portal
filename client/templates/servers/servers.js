Template.servers.helpers({
  server: function(){
    return Servers.find();
  },
  selectedServer: function(){
    return Session.get('selectedServer');
  }
});

Template.servers.events({
  'click a.get-server-info': function(e, t){
    // e=event, t=template
    e.preventDefault();

    // Set session var to selected server
    Session.set('selectedServer', this);
  }
});