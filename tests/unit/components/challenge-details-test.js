import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('challenge-details', 'Unit | Component | challenge details', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(3);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  //make a test fixture - session service
  var session = Ember.Object.extend().create({  isSignedIn: false });
  component.set('session', session);


  //make a test fixture - challenge model instance
  var challenge = Ember.Object.extend().create({id: 1, title: 'Test fixture challenge'});

  component.set('challenge', challenge);

  assert.ok(component.get('challenge'));

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
