import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('need-for-speed', 'Integration | Component | need for speed', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{need-for-speed}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#need-for-speed}}
      template block text
    {{/need-for-speed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
