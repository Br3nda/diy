export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'session',
  //after: ['cookie'],
 
  initialize: function(container, app) {
    app.inject('service', 'cookie', 'cookie:main');
  }  
};
