Router.route('/', {
  name: 'home'
});

Router.route('/servers', {
  name: 'servers',
  controller: ServerController
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
