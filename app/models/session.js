import DS from 'ember-data';

export default DS.Model.extend({
    url: DS.attr(),
    token: DS.attr(),
    type: {}  
});
