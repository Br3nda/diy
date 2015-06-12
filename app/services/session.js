import Ember from 'ember';

export default Ember.Service.extend({
  token: null,
  maker_id: null,
  maker_url: null,
  load: function (payload) {
    this.set('token', payload.token);
    this.set('maker_id', payload.id);
    this.set('maker_url', payload.url);
    debugger;
  }
});
