import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return this.get('mystore').application();
        return this.store.findAll('time-entry');
    }
});
