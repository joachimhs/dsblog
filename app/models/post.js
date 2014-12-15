Blog.Post = DS.Model.extend({
    ingress: DS.attr('string'),
    dato: DS.attr('date'),
    tittel: DS.attr('string'),
    content: DS.attr('string')
});