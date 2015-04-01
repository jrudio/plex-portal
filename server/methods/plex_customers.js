Meteor.methods({
  stripeCheckout: function(token, params){
    check(token, Object);
    check(params, Object);

    var serverId = params._id;
    var time = params.accessTime;
    var timeType = params.accessTimeType;
    var rateFromClient = params.rate;
    var rateFromDb = Servers.findOne({ _id: serverId }, { fields: { rate: 1 }}).rate;

    if(rateFromClient !== rateFromDb){
      throw new Meteor.Error('Not Charged', 'Price does not match price in DB');
    };
    
    // Charge card
    return Stripe.charges.create({
      amount: rateFromDb,
      currency: 'USD',
      source: token.id,
      description: token.card.name
    }).then(Meteor.bindEnvironment(function(charge){
      // Insert into PlexCustomers
      var chargeStatus = charge.status;
      var paymentTime = moment.utc(charge.created).toDate();
      var paymentSuccess = charge.paid;
      var clientIp = charge.payment;
      var email = charge.source.name;
      var currentUserId = Meteor.userId();
      var ratePaid = charge.amount;
      var plexPin = '32r3';

      if(!chargeStatus){ throw new Meteor.Error('Payment Error', 'Order did not got through'); };

      var fields = {
        serverId: serverId,
        userId: currentUserId,
        accessTime: time,
        accessTimeType: timeType,
        rate: rateFromClient,
        plexPin: plexPin,
        paymentSuccess: paymentSuccess,
        stripeEmail: email,
        clientIp: token.client_ip,
        paymentTime: paymentTime
      };

      // Display values for debugging
      // _.each(fields, function(value, key){
      //   console.log(key + ': ' + value);
      // });
      PlexCustomers.insert(fields);
    }, function(e){
      // Error binding callback
      console.log(e);
    }));
  }
});