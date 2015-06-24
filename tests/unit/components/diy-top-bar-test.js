import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('diy-top-bar', 'Unit | Component | diy top bar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(3);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

    //make a test fixture - session service
  component.set('session', Ember.Object.extend().create({  isSignedIn: false }));
  assert.ok(component.get('session'));


  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
