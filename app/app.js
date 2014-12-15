var Blog = Ember.Application.create({
    ready: function() {
    }
});

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Blog.Adapter = DS.RESTAdapter.extend();

//Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');

Blog.ApplicationStore = DS.Store.extend({
    adapter:  "Kodegenet.Adapter"
});