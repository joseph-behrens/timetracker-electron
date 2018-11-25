import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | timetracker', function(hooks) {
  setupApplicationTest(hooks);

  test('select projects loads existing projects', async function (assert) {
    
  });

  test('select client loads existing clients', async function (assert) {
    
  });

  test('home page should open report', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/report', 'should auto redirect to report page');
  })

  test('there should be a link to timer from main page', async function (assert) {
    await visit('/');
    await click('.menu-timer');
    assert.equal(currentURL(), '/timer', 'link should open timer page');
  });

  test('report link should show report', async function (assert) {
    await visit('/report');
    assert.equal(currentURL(), '/report');
  });

  test('report should list past time entries', async function (assert) {
    await visit('/report');
    assert.equal(this.element.querySelectorAll('.report-row').length, 3, 'should display 3 listings');
  });

  test('there should be a link to the report page from timer', async function (assert) {
    await visit('/timer');
    await click(".menu-report");
    assert.equal(currentURL(), '/report', 'should navigate to report page');
  });

  test('there should be a link to the timer page from report', async function (assert) {
    await visit('/report');
    await click(".menu-timer");
    assert.equal(currentURL(), '/timer', 'should navigate to timer page');
  });

  test('report should auto sort and filter by date', async function (assert) {
    
  });

  test('report should allow filter by client', async function (assert) {
    
  });

  test('report should allow filter by project', async function (assert) {
    
  });
});
