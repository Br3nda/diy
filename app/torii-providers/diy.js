export default Ember.Object.extend({
  // create a new authorization
  open: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject){
      // resolve with an authorization object
    });
  }
});