import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.diy.org',
    // pathForType: function (type) {
    //   console.log(type);
    //   return Ember.String.classify(type);
    // },
    headers: function () {
      return {
        'x-diy-api-token': this.get('token')
      }
    }.property('auth.token')
});


