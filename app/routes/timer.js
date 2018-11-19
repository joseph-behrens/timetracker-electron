import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return {
        //     "Client": "RBA",
        //     "Project": "IT Support",
        //     "Description": "Reset a password",
        //     "StartTime": new Date('December 20, 2018 13:30:00'),
        //     "EndTime": new Date('December 20, 2018 14:00:00')
        // }
        return $.getJSON("/data/time_entries.json");
    }
});
