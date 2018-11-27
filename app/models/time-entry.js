// import EmberObject from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
    ID: DS.attr('number'),
    Client: DS.attr('string'),
    Project: DS.attr('string'),
    Description: DS.attr('string'),
    StartTime: DS.attr('string'),
    EndTime: DS.attr('string'),
    rev: DS.attr('string')
});

// export default EmberObject.extend({

// });