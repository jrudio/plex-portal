Meteor.methods({
  userCreate: function(){
    return Factory.create('user');
  }
});