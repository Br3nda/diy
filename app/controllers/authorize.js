import Ember from 'ember';

export default Ember.Controller.extend({
    checkingCredentials: false,

    actions: {
        doAuth: function () {
            var username = this.get('username');
            var password = this.get('password');
            this.signIn(username, password);
        }
    },

    signIn: function (username, password) {
        this.set('checkingCredentials', true);
        this.set('loginError', '');
        
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
            self.session.saveSession(response.response);
            console.log(response);
            self.transitionTo('index');
        }).fail(function (jqXHR, textStatus) {
            self.set('loginError', textStatus);
            self.set('checkingCredentials', false);
        });
    }
});
