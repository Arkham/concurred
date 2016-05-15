import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  completionsCount: 0,
  errorsCount: 0,
  totalCount: 0,

  myTask: task(function* (throwError) {
    try {
      yield timeout(500);

      if (throwError) {
        throw new Error('Ayeeee');
      }

      this.incrementProperty('completionsCount');
    } catch(e) {
      this.incrementProperty('errorsCount');
    } finally {
      this.incrementProperty('totalCount');
    }
  }).restartable()
});
