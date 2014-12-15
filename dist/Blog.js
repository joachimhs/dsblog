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


Blog.BlogController = Ember.ArrayController.extend({
    sortProperties: ['dato'],
    sortAscending: true
});
Blog.BlogRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("post");
    }
});
Ember.Handlebars.registerBoundHelper("dato", function(param) {
     if (param) {
         var dateString = param.getDay() + "/" + (param.getMonth() +1) + "/" + param.getFullYear();
         return dateString;
     }
});
Blog.Post = DS.Model.extend({
    ingress: DS.attr('string'),
    dato: DS.attr('date'),
    tittel: DS.attr('string'),
    content: DS.attr('string')
});
Blog.Router.map(function() {
    this.resource("index", {path: "/"}, function() {

    });

    this.resource("blog",{path: "/blog"}, function() {
        this.route("post", {path: "/post/:post_id"}); //blog.post blog/post
    });
});