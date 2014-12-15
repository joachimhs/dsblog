var Blog = Ember.Application.create({
    ready: function() {
    }
});

DS.RESTAdapter.reopen({
    namespace: 'json/data'
});

Blog.Adapter = DS.RESTAdapter.extend();

//Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');

Blog.ApplicationStore = DS.Store.extend({
    adapter:  "Blog.Adapter"
});

