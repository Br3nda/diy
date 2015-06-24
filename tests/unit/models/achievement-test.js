import { moduleForModel, test } from 'ember-qunit';

moduleForModel('achievement', 'Unit | Model | achievement', {
  // Specify the other units that are required for this test.
  needs: [
    'model:maker',
    'model:challenge',
    'model:skill',
    'model:project',
    'model:clip'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
