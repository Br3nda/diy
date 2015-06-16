import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.diy.org',


  /**
    Override Ember's idea of how a rest adapter is laid out.
  */
  pathForType: function (type) {
    if (type === 'badge'){
      type = 'assertions';
    }
    return this._super(type);
  },

  /**
  */
  headers: function () {
    return {
      'x-diy-api-token': this.get('token')
    };
  }.property('auth.token')
});


