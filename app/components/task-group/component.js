import Ember from 'ember';
import { task, taskGroup, timeout } from 'ember-concurrency';

const TASK_FN = function* () {
  yield timeout(2000);
};

const { computed, get } = Ember;

export default Ember.Component.extend({
  chores: taskGroup().drop(),

  mowLawn: task(TASK_FN).group('chores'),
  doDishes: task(TASK_FN).group('chores'),
  changeDiapers: task(TASK_FN).group('chores'),

  lastChoreDescription: computed('chores.last.state', function() {
    let lastChore = get(this, 'chores.last');

    if (lastChore) {
      return `${get(lastChore, 'task.name')} (${get(lastChore, 'state')})`;
    } else {
      return 'none';
    }
  })
});
