Blog.Router.map(function() {
    this.resource("index", {path: "/"}, function() {

    });

    this.resource("blog",{path: "/blog"}, function() {
        this.route("post", {path: "/post/:post_id"}); //blog.post blog/post
    });
});