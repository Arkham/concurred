import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { computed, get, set } = Ember;

export default Ember.Component.extend({
  duration: null,
  current: null,

  decoratedCurrent: computed('current', function() {
    let current = get(this, 'current');

    if (current === 0) {
      return 'Done!';
    } else {
      return current;
    }
  }),

  startCountdown: task(function* (duration) {
    set(this, 'current', duration);

    while (get(this, 'current') > 0) {
      yield timeout(1000);
      this.decrementProperty('current');
    }
  }).restartable()
});
