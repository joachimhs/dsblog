Ember.Handlebars.registerBoundHelper("dato", function(param) {
     if (param) {
         var dateString = param.getDay() + "/" + (param.getMonth() +1) + "/" + param.getFullYear();
         return dateString;
     }
});