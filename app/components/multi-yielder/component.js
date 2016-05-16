import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { set } = Ember;

export default Ember.Component.extend({
  waitAFewSeconds: task(function* () {
    set(this, 'status', 'Gimme one second..');
    yield timeout(1000);
    set(this, 'status', 'Gimme one more second..');
    yield timeout(1000);
    set(this, 'status', 'OK, I am done!');
  }),

  waitForPromise: task(function* () {
    set(this, 'status', 'Waiting...');
    let promise = timeout(1000).then(() => 12345);
    let resolvedValue = yield promise;
    set(this, 'status', `The value of the promise is ${resolvedValue}`);
  }),

  waitForFailingPromise: task(function* () {
    set(this, 'status', 'Waiting...');

    let promise = timeout(1000).then(() => {
      throw 'Ayeeeeee';
    });

    try {
      yield promise;
    } catch(e) {
      set(this, 'status', `The value of the error is ${e}`);
    }
  })
});
