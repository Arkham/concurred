import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { get, set } = Ember;
const IDLE_STATUS = '[idle]';
const TIMEOUT = 1000;

export default Ember.Component.extend({
  status: IDLE_STATUS,

  parentTask: task(function* () {
    set(this, 'status', '[running] parent');
    yield timeout(TIMEOUT);
    set(this, 'status', '[running] parent -> child');
    yield get(this, 'childTask').perform();
    set(this, 'status', '[running] parent <- child');
    yield timeout(TIMEOUT);
    set(this, 'status', IDLE_STATUS);
  }).restartable(),

  childTask: task(function* () {
    yield timeout(TIMEOUT);
    set(this, 'status', '[running]           child -> granchild');
    yield get(this, 'granchildTask').perform();
    set(this, 'status', '[running]           child <- granchild');
    yield timeout(TIMEOUT);
  }),

  granchildTask: task(function* () {
    yield timeout(TIMEOUT);
  })
});
