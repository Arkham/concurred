import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  greet: task(function* () {
    yield timeout(1000);
    alert("hello there!");
  }),

  greetDebounced: task(function* () {
    yield timeout(1000);
    alert("hello there!");
  }).restartable(),

  greetDrop: task(function* () {
    yield timeout(1000);
    alert("hello there!");
  }).drop()
});
