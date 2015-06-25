import { moduleFor, test } from 'ember-qunit';

moduleFor('service:session', 'Unit | Service | session', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});


// test('sign in', function (assert) {
//   assert.expect(1);

//   var session = this.subject();

//   var username = 'fakeuser';
//   var password = 'fasspass';

//   session.signIn(username, password).then(function () {
//     assert.ok(session.get('isSignedIn'));
//   });

// });

// test('can save session', function (assert) {
//   assert.expect(1);
//   var session = this.subject();
//   session.saveSession({token: 'hey', id: 1, url: 'foobar'});
// });

// test('load session', function (assert) {
//   var session = this.subject();
//   assert.expect(1);
// });

// test('sign out', function (assert) {
//   var session = this.subject();
//   assert.expect(1);
// });


// Replace this with your real tests.
test('it exists', function(assert) {
  var session = this.subject();
  assert.ok(session);
});
