// the purpose of this application is to feature the
//$templateCache and how best to use it. Templating can get 
// boggy if there are many templates to render.
// 

(function(){
    function TestCtrl($templateCache) {
        this.user = {name: 'Mica'};
        console.log($templateCache.get('test.html')); // show the magic of $templateCache
    }

    angular.module('app',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/',{
            controller: 'TestCtrl as test',
            templateUrl: 'test.html' // test.html considered templateUrl id attribute to $templateCache
        })
        .otherwise('/');
    })
    .controller('TestCtrl',TestCtrl);
    angular.module('app').run(function($templateCache){
        $templateCache.put('test.html','Hello {{test.user.name}}!');
    });
})()