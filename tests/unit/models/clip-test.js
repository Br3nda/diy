import { moduleForModel, test } from 'ember-qunit';

moduleForModel('clip', 'Unit | Model | clip', {
  // Specify the other units that are required for this test.
  needs: [
    'model:project',
    'model:maker',
    'model:achievement'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
