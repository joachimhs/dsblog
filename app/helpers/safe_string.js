Ember.Handlebars.registerBoundHelper("safeString", function(param) {
    if (param) {
        return new Handlebars.SafeString(param);
    }
});