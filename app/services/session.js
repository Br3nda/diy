import Ember from 'ember';

export default Ember.Service.extend({
  token: null,
  maker_id: null,
  maker_url: null,

  isLoggedIn:function () {
    this.loadSession();
    return !! this.get('token');
  },
  saveSession: function (payload) {
    this.set('token', payload.token);
    this.set('maker_id', payload.id);
    this.set('maker_url', payload.url);

    var cookie = this.get('cookie');
 
    console.log("Setting cookies");
    cookie.setCookie('token', payload.token);
    cookie.setCookie('maker_id', payload.id);
    cookie.setCookie('maker_url', payload.url); 
  },
  loadSession: function () {
    var cookie = this.get('cookie');

    console.log("Loading from cookies");
    this.set('token', cookie.getCookie('token'));
    this.set('maker_id', cookie.getCookie('maker_id'));
    this.set('maker_url', cookie.getCookie('maker_url'));
  }
});
