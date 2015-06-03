import Ember from 'ember';

export default Ember.Controller.extend({
    isLoggedIn: false,
    saveSession: function (response){
        var session = this.store.createRecord('session', response);
        session.save();
        this.set('model', session);
    },
    model: function () {
        return this.find('session');
    }.property('@each.session')
});
