import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

let HELLO_THERE_FN = function* () {
  yield timeout(1000);
  alert("hello there!");
};

export default Ember.Component.extend({
  greet: task(HELLO_THERE_FN),
  greetDebounced: task(HELLO_THERE_FN).restartable(),
  greetEnqueued: task(HELLO_THERE_FN).enqueue(),
  greetDrop: task(HELLO_THERE_FN).drop()
});
