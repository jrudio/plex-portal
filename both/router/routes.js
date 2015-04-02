Router.route('/', {
  name: 'home'
});

Router.route('/servers', {
  name: 'servers',
  controller: ServerController
});

Router.route('/orders', {
  name: 'orders'
});

Router.plugin('ensureSignedIn', {
  only: ['orders']
});
