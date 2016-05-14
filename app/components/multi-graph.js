import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

function * SHARED_TASK_FN(tracker) {
  tracker.start();
  try {
    yield timeout(2000);
  } finally {
    tracker.end();
  }
}

export default Ember.Component.extend({
  normalTask: task(SHARED_TASK_FN)
});
