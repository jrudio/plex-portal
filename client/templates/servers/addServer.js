Template.add_server_prompt.events({
  'click button.submit-to-server': function(e, t){
    e.preventDefault();
    var formId = 'insertServerRequest';

    // validate
    var isValidated = AutoForm.validateForm(formId);
    var doc = AutoForm.getFormValues(formId).insertDoc;

    // Call method with promise
    var listServer;

    if(!isValidated){
      return console.error('One or more fields is invalid');
    };

    listServer = new Promise(function(resolve, reject){
      Meteor.call('listServer', doc, function (error, result) {
        if(error){
          return reject(error);
        }
        else{
          return resolve(result);
        };
      });
    });

    listServer.then(function(result){
      // close modal if successful
    
      var modal = t.$('div.add-server-modal');
      modal.modal('hide');

      // Reset Form
      AutoForm.resetForm('insertServerRequest');
    }, function(error){
      console.error(error);
    });
  }
});