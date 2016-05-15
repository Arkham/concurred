import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('press-and-hold-button', 'Integration | Component | press and hold button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{press-and-hold-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#press-and-hold-button}}
      template block text
    {{/press-and-hold-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
