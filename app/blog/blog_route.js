Blog.BlogRoute = Ember.Route.extend({
    model: function() {
        var posts = [];

        posts.pushObject(Ember.Object.create({
            "id": "post_1",
            "tittel": "Inlegg 1",
            "ingress": "Ingress tekst.Ingress tekst.Ingress tekst.",
            "dato": "2014-12-15"
        }));

        posts.pushObject(Ember.Object.create({
            "id": "post_2",
            "tittel": "Inlegg 2",
            "ingress": "Ingress tekst2.Ingress tekst2.Ingress tekst2.",
            "dato": "2014-12-11"
        }));

        return posts;
    }
});