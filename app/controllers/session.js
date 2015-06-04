import Ember from 'ember';

export default Ember.Controller.extend({
    isLoggedIn: false,
    saveSession: function (response){
        var session = this.store.createRecord('session', {token: response.token});
        session.save();

        var maker = this.store.createRecord('maker', response);
        make.save();

        this.set('maker_id', maker.get('id'));
        this.set('isLoggedIn', true);
    },
    model: function () {
      return this.find('session');
    }
});
