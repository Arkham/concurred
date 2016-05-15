import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  askTheQuestion: task(function*() {
    yield timeout(2000);
    return Math.floor(Math.random() * 100);
  }).drop()
});
