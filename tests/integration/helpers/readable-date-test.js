import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | readable-date', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('formats date', async function(assert) {
    this.set('inputValue', 'Tue Dec 06 2018 13:30:00 GMT-0600 (Central Standard Time)');

    await render(hbs`{{readable-date inputValue}}`);
    let testDate = new Date(2018, 11, 6, 13, 30);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    let testString = testDate.toLocaleString('en-US', options)
    assert.equal(this.element.textContent.trim(), testString);
  });
});
