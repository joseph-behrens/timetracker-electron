import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | time-spent', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('calculates correct time', async function(assert) {
    
    await render(hbs`{{time-spent 'Tue Dec 06 2018 13:30:00 GMT-0600 (Central Standard Time)' 'Tue Dec 06 2018 18:45:00 GMT-0600 (Central Standard Time)'}}`);

    assert.equal(this.element.textContent.trim(), '05:15');
  });
});
