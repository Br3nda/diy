export default {
  name: 'sesssion',
  before: 'ember-data',
  initialize: function (registry, app) {
    app.inject('adapter', 'session', 'service:session');
    app.inject('controller', 'session', 'service:session');
    app.inject('route', 'session', 'service:session');
    app.inject('component', 'session', 'service:session');
  }
};
