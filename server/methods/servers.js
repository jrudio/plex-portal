Meteor.methods({
  listServer: function(params){
    check(params, Object);

    var _isAvailable = params.available;
    var _accessTime = params.accessTime;
    var _accessTimeType = params.accessTimeType;
    var _rate = params.rate;
    var _currency = params.currency;
    var _serverName = params.serverName;
    var _postTitle = params.postTitle;
    var _postDescription = params.postDescription;

    var fields = {
      available: _isAvailable,
      accessTime: _accessTime,
      accessTimeType: _accessTimeType,
      rate: _rate,
      currency: _currency,
      serverName: _serverName,
      postTitle: _postTitle,
      postDescription: _postDescription
    };

    console.dir(fields);

    return Servers.insert(fields) ? true : false;
  }
});