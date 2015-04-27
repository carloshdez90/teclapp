// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    ionic.material.ink.displayEffect();
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.categories', {
        url: '/categories',
        views: {
            'menuContent': {
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesCtrl'
            },
            'fabContent': {
                template: '<button id="fab-bussiness" class="button button-fab button-fab-top-left expanded button-energized-900 spin" style="display:none;"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-bussiness').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.category_detail', {
        url: '/categories/:category_id/:category_name',
        views: {
            'menuContent': {
                templateUrl: 'templates/category_detail.html',
                controller: 'CategoryDetailCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop" style="display:none;"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
    .state('app.bussiness', {
        url: '/bussiness',
        views: {
            'menuContent': {
                templateUrl: 'templates/bussiness.html',
                controller: 'BussinessCtrl'
            },
            'fabContent': {
                template: '<button id="fab-bussiness" class="button button-fab button-fab-top-left expanded button-energized-900 spin" style="display:none;"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-bussiness').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.bussiness_detail', {
        url: '/bussiness/:bussiness_id',
        views: {
            'menuContent': {
                templateUrl: 'templates/bussiness_detail.html',
                controller: 'BussinessDetailCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop" style="display:none;"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller: 'DashboardCtrl'
            },
            'fabContent': {
                /*template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',*/
                template: '<span></span>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            },
            'fabContent': {
                /*template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',*/
                template: '<span></span>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
});
