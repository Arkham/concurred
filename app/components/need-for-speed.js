import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  number: 0,

  incrementBy: task(function* (value) {
    let speed = 400;

    while (true) {
      this.incrementProperty('number', value);
      yield timeout(speed);
      speed = Math.max(20, speed * 0.9);
    }
  })
});
