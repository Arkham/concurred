import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('meaning-of-life', 'Integration | Component | meaning of life', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{meaning-of-life}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#meaning-of-life}}
      template block text
    {{/meaning-of-life}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
