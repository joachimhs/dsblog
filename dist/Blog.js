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


Blog.ApplicationRoute = Ember.Route.extend({
    model: function() {
        /*return Ember.RSVP.hash({
            translations: this.store.find('translation'),
            pages: this.store.find('page')
        });*/
    }
});
Blog.BlogIndexController = Ember.ArrayController.extend({
    sortProperties: ['dato'],
    sortAscending: false
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
Ember.Handlebars.registerBoundHelper("safeString", function(param) {
    if (param) {
        return new Handlebars.SafeString(param);
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