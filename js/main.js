requirejs.config({
    paths: {
               jQuery:'/js/libs/jquery-1.9.1',
               Underscore:'/js/libs/underscore',
               Modernizr: '/js/libs/modernizr',
               Backbone: '/js/libs/backbone',
               Marionette: '/js/libs/backbone.marionette',
               Handlebars: '/js/libs/handlebars',
               text: '/js/libs/text',
               cs: '/js/libs/cs',
               templates:'/templates'
           },
    shim: {
                Modernizr:['jQuery'],
                Backbone: ['jQuery', 'Underscore', 'Handlebars'],
                Marionette: ['Backbone'],
                Application: ['Marionette']

           }
});

require(['Application'], function(app) {
    app.init();
   // alert('hello');
});
