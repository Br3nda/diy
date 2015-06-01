import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    extract: function(store, typeClass, payload /*, id, requestType*/) {
        return payload.response;
    }
});
