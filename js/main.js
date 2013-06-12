requirejs.config({
    paths: {
               jquery:'/js/libs/jquery-1.9.1',
               underscore:'/js/libs/underscore',
               modernizr: '/js/libs/modernizr',
               backbone: '/js/libs/backbone',
               marionette: '/js/backbone.marionette',
               //'backbone.wreqr' : '/js/libs/backbone.wreqr',
               //'backbone.babysitter': '/js/libs/backbone.babysitter',

               handlebars: '/js/libs/handlebars',
               text: '/js/libs/text',
               cs: '/js/libs/cs',
               templates:'/templates'
           },
    shim: {
                jquery: {
                  exports: "jQuery"
                },
                underscore: {
                  exports: '_'
                },
                modernizr:['jquery'],
                backbone: {
                  deps: ['jquery', 'underscore', 'handlebars'],
                  exports: "Backbone"
                },
                marionette: {
                  deps: ["backbone", "underscore"],
                  exports: "Backbone.Marionette"

                },
                Application: ['marionette', 'modernizr']
           }
});

require(['Application'], function(app) {
    console.log('this is marionette: ', '');
    app.init();
   // alert('hello');
});
