Ember.TEMPLATES["application"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers._triageMustache.call(depth0, "blog-header", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});

Ember.TEMPLATES["blog"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"useData":true});

Ember.TEMPLATES["blog/index"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <div class=\"blogIngress\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "post.tittel", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n        <div class=\"blogDate\">");
  data.buffer.push(escapeExpression(((helpers.dato || (depth0 && depth0.dato) || helperMissing).call(depth0, "post.dato", {"name":"dato","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</div>\n        <div class=\"ingress\">");
  stack1 = helpers._triageMustache.call(depth0, "post.ingress", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n        ");
  data.buffer.push(escapeExpression(((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "Les hele innlegget", "blog.post", "post", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING","ID"],"contexts":[depth0,depth0,depth0],"data":data}))));
  data.buffer.push("\n    </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"useData":true});

Ember.TEMPLATES["blog/post"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class=\"blogIngress\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "tittel", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <div class=\"blogDate\">");
  data.buffer.push(escapeExpression(((helpers.dato || (depth0 && depth0.dato) || helperMissing).call(depth0, "dato", {"name":"dato","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</div>\n    <div class=\"ingress\">");
  stack1 = helpers._triageMustache.call(depth0, "ingress", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n    <div class=\"blogContent\">");
  data.buffer.push(escapeExpression(((helpers.safeString || (depth0 && depth0.safeString) || helperMissing).call(depth0, "content.content", {"name":"safeString","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</div>\n\n    ");
  data.buffer.push(escapeExpression(((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "Tilbake til blogg", "blog", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}))));
  data.buffer.push("\n</div>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["components/blog-header"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<header id=\"headerArea\">\n    <ul>\n        <li>");
  data.buffer.push(escapeExpression(((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "Index", "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}))));
  data.buffer.push("</li>\n        <li>");
  data.buffer.push(escapeExpression(((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "Blog", "blog", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING"],"contexts":[depth0,depth0],"data":data}))));
  data.buffer.push("</li>\n    </ul>\n</header>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("Index Template\n");
  },"useData":true});