Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});

Template.registerHelper('decodeString', function(string){
    return decodeURIComponent(string);
});
