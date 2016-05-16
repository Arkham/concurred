import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { get, set } = Ember;

function * SHARED_TASK_FN(tracker) {
  tracker.start();
  try {
    yield timeout(1500);
  } finally {
    tracker.end();
  }
}

export default Ember.Component.extend({
  concurrencyTypes: ['normal', 'restartable', 'enqueue', 'drop'],

  maxConcurrency: null,
  concurrencyType: null,
  dynamicConcurrencyTask: null,

  actions: {
    setConcurrencyType(type) {
      set(this, 'concurrencyType', type);
      this.send('setDynamicConcurrency');
    },

    setDynamicConcurrency() {
      let concurrencyType = get(this, 'concurrencyType');
      let maxConcurrency = get(this, 'maxConcurrency') || 1;

      if (concurrencyType) {
        let newTask = task(SHARED_TASK_FN);

        switch(concurrencyType) {
          case 'restartable':
            newTask.maxConcurrency(maxConcurrency).restartable();
            break;
          case 'enqueue':
            newTask.maxConcurrency(maxConcurrency).enqueue();
            break;
          case 'drop':
            newTask.maxConcurrency(maxConcurrency).drop();
            break;
        }

        set(this, 'dynamicConcurrencyTask', newTask);
      }
    }
  }
});
