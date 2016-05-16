import Ember from 'ember';

let sendPress = function() {
  this.sendAction('press');
};

let sendRelease = function() {
  this.sendAction('release');
};

export default Ember.Component.extend({
  tagName: 'button',

  touchStart: sendPress,
  mouseDown: sendPress,

  touchEnd: sendRelease,
  mouseLeave: sendRelease,
  mouseUp: sendRelease
});
