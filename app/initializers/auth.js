export default {
  name: 'auth',
  before: 'ember-data',
  initialize: function (registry, app) {
    app.inject('adapter', 'auth', 'service:auth');
    app.inject('controller', 'auth', 'service:auth');
  }

};
