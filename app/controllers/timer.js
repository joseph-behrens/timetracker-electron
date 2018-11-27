import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createTimeEntry() {
            let timeEntry = this.store.createRecord("time-entry", {
                Client: this.get('client'),
                Project: this.get('project'),
                Description: this.get('description'),
                StartTime: this.get('start'),
                EndTime: this.get('end')
            });
            timeEntry.save();
            
            this.set('client', '');
            this.set('project', '');
            this.set('description', '');
            this.set('start', '');
            this.set('end', '');
        }
    }
});
