define(['views/index'], function(IndexView) {

    //declare the router
    var router = Backbone.Router.extend({
        routes: {
                    '/':'index'

                },
        index: function() {

        }


    })

    return new router();

})
