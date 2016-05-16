import Ember from 'ember';
import { task } from 'ember-concurrency';

const WAIT_HERE_FOREVER = Ember.RSVP.defer().promise;

const { computed, get, set } = Ember;

export default Ember.Component.extend({
  startedTasks: null,

  mostRecentTask: computed.oneWay('startedTasks.lastObject'),
  count: computed.oneWay('startedTasks.length'),

  initializeDefaults: Ember.on('init', function() {
    if (get(this, 'startedTasks') === null) {
      set(this, 'startedTasks', []);
    }
  }),

  waitingTask: task(function* () {
    yield WAIT_HERE_FOREVER;
  }),

  actions: {
    performTask() {
      let task = get(this, 'waitingTask');
      let taskInstance = task.perform();
      get(this, 'startedTasks').pushObject(taskInstance);
    },

    cancelAll() {
      get(this, 'waitingTask').cancelAll();
      set(this, 'startedTasks', []);
    },

    cancelMostRecent() {
      let mostRecentTask = get(this, 'mostRecentTask');

      if (mostRecentTask) {
        mostRecentTask.cancel();
        get(this, 'startedTasks').removeObject(mostRecentTask);
      }
    }
  }
});
