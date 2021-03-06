import Ember from 'ember';
import Promise from 'ember';

export default Ember.Service.extend({
  token: null,
  maker_id: null,
  maker_url: null,

  signInErrorMessage: '',
  isSignedIn: function () {
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
  },
  signOut: function () {

    var cookie = this.get('cookie');
    cookie.setCookie('token', '');
    cookie.setCookie('maker_id', '');
    cookie.setCookie('maker_url', '');
    this.set('token', 0);
    this.set('maker_id', 0);
    this.set('maker_url', 0);

    this.set('isSignedIn', false);
  },
  signIn: function (username, password, success, fail, always) {
    var self = this;

    self.set('signInErrorMessage', '');

    return Ember.$.ajax({
      type: "GET",
      url: 'https://api.diy.org/authorize',
      username: username,
      password: password,
      beforeSend: function (xhr){
        var tok = username + ':' + password;
        var hash = btoa(tok);
        xhr.setRequestHeader('Authorization',  "Basic " + hash);
      },

    }).done(function (response){
      self.saveSession(response.response);
      self.set('isSignedIn', true);
      success.call();
    }).fail(function (jqXHR, textStatus) {
      self.set('signInErrorMessage', textStatus);
      fail.call();
    }).always(function() {
      always.call();
    });

  }
});
