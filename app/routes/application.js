import Route from '@ember/routing/route';
import timeEntry from '../models/time-entry';

export default Route.extend({
    model() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                let data = $.getJSON("/data/time_entries.json");
                data.then(function(data) {
                    let records = [];
                    data.forEach(function(item) {
                        records.push(timeEntry.create(item));
                    });
                    resolve(records);
                })
            }, 400);
        });
    }
});
