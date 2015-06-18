export function initialize( container /*, application*/ ) {
  // application.inject('route', 'foo', 'service:foo');
  let store = container.lookup('store:main');
  store.find('skill', {limit: 500});
}

export default {
  name: 'load-skills',
  initialize: initialize,
  after: ['store'],
};
