import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

let remote = new PouchDB('http://localhost:5984/timetracker-electron');
let db = new PouchDB('local_pouch');

db.sync(remote, {
    live: true,
    retry: true
});

export default Adapter.extend({
    db: db
});
