import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | timetracker', function(hooks) {
  setupApplicationTest(hooks);

  test('select projects loads existing projects', async function (assert) {
    
  });

  test('select client loads existing clients', async function (assert) {
    
  });

  test('report link should open report page', async function (assert) {
    
  });

  test('report should auto sort and filter by date', async function (assert) {
    
  });

  test('report should allow filter by client', async function (assert) {
    
  });

  test('report should allow filter by project', async function (assert) {
    
  });

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

});
