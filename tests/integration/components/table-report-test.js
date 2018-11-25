import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | table-report', function(hooks) {
  setupRenderingTest(hooks);

  test('sets table class', async function(assert) {

    await render(hbs`{{table-report}}`);

    assert.equal(this.element.querySelector('table').getAttribute('class'), 'table-report ember-view')
  });
});
