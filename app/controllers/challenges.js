import Ember from 'ember';

export default Ember.Controller.extend({
    model: function () {
        return this.store.find('challenge', {skill_id: this.get('skill.url')});
    }
});
