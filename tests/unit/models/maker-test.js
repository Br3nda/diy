import { moduleForModel, test } from 'ember-qunit';

moduleForModel('maker', 'Unit | Model | maker', {
  // Specify the other units that are required for this test.
  needs: [
    'model:achievement',
    'model:challenge',
    'model:skill',
    'model:project'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
