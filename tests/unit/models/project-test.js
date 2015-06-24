import { moduleForModel, test } from 'ember-qunit';

moduleForModel('project', 'Unit | Model | project', {
  // Specify the other units that are required for this test.
  needs: [
    'model:maker',
    'model:achievement',
    'model:clip',
    'model:challenge',
    'model:skill'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
