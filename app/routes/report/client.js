import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.modelFor('report').filterBy("Client", params.client_name);
  }
});