AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.addField({
  _id: 'username',
  required: true,
  type: 'text'
});