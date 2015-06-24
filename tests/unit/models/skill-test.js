import { moduleForModel, test } from 'ember-qunit';

moduleForModel('skill', 'Unit | Model | skill', {
  // Specify the other units that are required for this test.
  needs: ['model:challenge']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
