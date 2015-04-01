Meteor.startup(function(){
  Factory.define('server', Servers, {
    createdAt: function(){
      return moment.utc().toDate();
    },
    serverOwner: function(){
      return Random.id();
    },
    available: function(){
      var ranBoolean = [true, false];
      return Random.choice(ranBoolean);
    },
    accessTime: function(){
      return _.random(2, 30);
    },
    accessTimeType: function(){
      // 1=minutes, 2=days, 3=months, 4=indefinite, 5=onDemand
      return _.random(1, 6);
    },
    rate: function(){ 
      return _.random(2, 35);
    },
    currency: function(){
      return 'USD';
    },
    serverName: function(){
      return Fake.word();
    },
    postTitle: function(){
      return Fake.word();
    },
    postDescription: function(){
      return Fake.sentence(_.random(4, 7));
    }
  });

  if(Servers.find().count() === 0){
    _.times(5, function(){
      Factory.create('server');
    });
  };
});