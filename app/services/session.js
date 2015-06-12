import Ember from 'ember';

export default Ember.Service.extend({
  token: null,
  maker_id: null,
  maker_url: null,
  load: function (payload) {
    this.set('token', payload.token);
    this.set('maker_id', payload.id);
    this.set('maker_url', payload.url);

    var self   = this;
    var cookie = this.get('cookie');
 
    cookie.setCookie('token', payload.token);
    cookie.setCookie('maker_id', payload.id);
    cookie.setCookie('maker_url', payload.url);
    
  }
});
