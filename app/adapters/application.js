import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.diy.org',
    pathForType: function (type) {
      if (type == 'badge'){
        return 'assertions';
      }
      if (type == 'challenge') {
        return 'skills/skillname/challenges';
      }
      return Ember.String.pluralize(type);
    },
    headers: function () {
      return {
        'x-diy-api-token': this.get('token')
      }
    }.property('auth.token')
});


