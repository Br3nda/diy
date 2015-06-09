import Ember from 'ember';

export default Ember.Controller.extend({
    isLoggedIn: false,
    model: function () {
      debugger;
      return this.store.find('session', 1);
    }.property('model'),
    saveSession: function (response){
        var session = this.store.createRecord('session', response);
        session.maker_id = session.id;
        session.id = 1;
        session.save();
        this.set('isLoggedIn', true);
    }

});
