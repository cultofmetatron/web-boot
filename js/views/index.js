define(['text!templates/index.hbs'], function(indexTemplate) {
    var indexView = Backbone.View.extend({
        el:$('body'),
        render:function() {
            var compiledTemplate = Handlebars.compile(indexTemplate);
            this.$el.html(compiledTemplate);

        }

    })

} )
