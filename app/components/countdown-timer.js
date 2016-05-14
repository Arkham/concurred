import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  duration: null,
  current: null,

  startCountdownTask: task(function* (duration) {
    this.set('current', duration);

    while (this.get('current') > 0) {
      yield timeout(1000);
      this.decrementProperty('current');
    }

    this.set('current', 'DONE!');
    yield timeout(2000);
    this.set('current', null);
  }).restartable(),

  actions: {
    startCountdown() {
      let duration = this.get('duration');
      this.get('startCountdownTask').perform(duration);
    }
  }
});
