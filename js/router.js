define(['views/index'], function(IndexView) {

    //declare the router
    var router = Backbone.Router.extend({
        routes: {
                    'index':'index'

                },
        index: function() {

            console.log('index called');
        }


    })

    return new router();

})
