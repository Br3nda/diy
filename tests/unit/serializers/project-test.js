import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('project', 'Unit | Serializer | project', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:project',
    'model:maker',
    'model:achievement',
    'model:clip',
    'model:challenge',
    'model:skill'
    ]
});

// Replace this with your real tests.
test('it serializes projects', function(assert) {
  assert.expect(5);

  var store = this.store();
  var maker;
  Ember.run(function () {
    maker = store.createRecord('maker', {id: 1, 'nickname': 'pikachu'});
  });
  var project = this.subject({
    stamp: 'stampy',
    title: 'project title',
    maker: maker
  });

  var s = project.serialize();
  assert.ok(s);

  assert.equal(s.stamp, 'stampy');
  assert.equal(s.title, 'project title');
  assert.ok(s.maker);
  assert.equal(s.maker, 1);

});
