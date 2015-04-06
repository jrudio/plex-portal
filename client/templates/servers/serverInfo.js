Template.server_info.events({
  'click button.stripe-button': function(e, t){
    // e = event, t = template
    e.preventDefault();

    var params = this;
    var rate = this.rate;

    var serverName = this.serverName;
    var serverOwner = this.serverOwner;

    console.log('Client rate ' + rate);
    var checkout = StripeCheckout.configure({
      key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
      image: 'https://i.imgur.com/ErLyYDo.jpg',
      token: function(token){
        Meteor.call('stripeCheckout', token, params, function(e, r){
          if(e){
            console.log('client ' + e);
          };
        });
      }
    });

    checkout.open({
      name: 'Plex Server Portal',
      description: 'Access to ' + serverName + ' owned by ' + serverOwner,
      amount: rate
    });
  }
});