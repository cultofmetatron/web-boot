define(['router'], function(appRouter) {
    //bootup directory
    initialize = function() {
        console.log('app initialized');

        Backbone.history.start();
        appRouter.navigate('index', {trigger: true});
    }


    return {
        init:initialize,

    }


})
