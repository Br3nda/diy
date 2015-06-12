import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['session'],
    isLoggedIn: Ember.computed.alias('controllers.session.isLoggedIn'),
    actions: {
        doAuth: function () {
            var username = this.get('username');
            var password = this.get('password');
            this.signIn(username, password);
        }
    },
    signIn: function (username, password) {
        var self = this;

        $.ajax({
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
            console.log('log in success');
            self.auth.set('token', response.response.token);
            self.auth.set('maker_id', response.response.id);
            self.auth.set('maker_url', response.response.url);
            self.transitionTo('portfolio');
        }).fail(function (jqXHR, textStatus) {
            self.set('loginError', textStatus);
        });
    }
});
