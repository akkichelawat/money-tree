angular.module("app", [
    'ui.router'
    ])


.config(function($stateProvider, $urlRouterProvider){


    $stateProvider
    .state('home',{
        url:'/home',
        component: 'home'
    });

    $urlRouterProvider.otherwise('/home');




})
.component('home',{
    templateUrl:'src/home.html',
    controller: function(){

        console.log("home");
    },

})
.component('hello',{
    template: '<h1>I aam child</h1>',
    controller: function(){
        console.log("child");
    }
})
