import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.diy.org',
  /**
  */
  headers: function () {
    return {
      'x-diy-api-token': this.get('token')
    };
  }.property('auth.token')
});


