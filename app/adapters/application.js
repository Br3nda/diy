import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.diy.org',
  /**
  */
  headers: function () {
    this.session.loadSession();
    return {
      'x-diy-api-token': this.session.get('token')
    };
  }.property('session.token')
});


