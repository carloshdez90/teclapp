angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('BussinessCtrl', function($scope, $stateParams, $timeout, Bussiness) {
    var c = 1 ;
    $scope.moreData = true;
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    //$scope.$parent.setHeaderFab('left');

    promise = Bussiness.some(c);
    promise.then(function(response) {
      $scope.bussinesses = response.data.businesses;
      c++;
    });

    $scope.loadMore = function() {

        promise = Bussiness.some(c);
        promise.then(function(response) {
          if (response.data.businesses.length <= 0) {$scope.moreData = false;};
          angular.forEach(response.data.businesses, function(value, key) {
            $scope.bussinesses.push({id: value.id, name: value.name, desc: ""});
          });

          $scope.$broadcast('scroll.infiniteScrollComplete');
          c++;
        });
        
     
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    $timeout(function() {
        //ionic.material.motion.ripple();
    }, 1000);

    // Set Ink
    ionic.material.ink.displayEffect();

})

.controller('CategoriesCtrl', function($scope, $stateParams, $timeout, Categories) {
    var c = 1 ;
    $scope.moreData = true;
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    //$scope.$parent.setHeaderFab('left');

    promise = Categories.some(c);
    promise.then(function(response) {
      $scope.categories = response.data.categories;
      c++;
    });

    $scope.loadMore = function() {

        promise = Categories.some(c);
        promise.then(function(response) {
          if (response.data.categories.length <= 0) {$scope.moreData = false;};
          angular.forEach(response.data.categories, function(value, key) {
            $scope.categories.push({id: value.id, name: value.name, desc: ""});
          });

          $scope.$broadcast('scroll.infiniteScrollComplete');
          console.log($scope.categories,"---- ", c);
          c++;
        });
        
     
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    $timeout(function() {
        //ionic.material.motion.ripple();
    }, 1000);

    // Set Ink
    ionic.material.ink.displayEffect();

})

.controller('CategoryDetailCtrl', function($scope, $stateParams, $timeout,Bussiness) {
    $scope.hasOffers = false;
    $scope.showOffers = false;
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    var c = 1 ;
    $scope.moreData = true;
    $scope.category_name = $stateParams.category_name;
    // Set Header

    promise = Bussiness.by_category($stateParams.category_id,c);
    promise.then(function(response) {
      $scope.bussinesses = response.data.businesses;
      c++;
    });

    $scope.loadMore = function() {

        promise = Bussiness.by_category($stateParams.category_id,c);
        promise.then(function(response) {
          if (response.data.businesses.length <= 0) {$scope.moreData = false;};
          angular.forEach(response.data.businesses, function(value, key) {
            $scope.bussinesses.push({id: value.id, name: value.name, desc: ""});
          });

          $scope.$broadcast('scroll.infiniteScrollComplete');
          c++;
        });
        
     
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });


    // Activate ink for controller
    ionic.material.ink.displayEffect();

    ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    ionic.material.motion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('AboutCtrl', function($scope, $stateParams, $timeout) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionic.material.motion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionic.material.motion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionic.material.ink.displayEffect();
})

.controller('DashboardCtrl', function($scope, $stateParams, $timeout) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.elements = [{id: 1, name: "Negocios", desc:"Listado de todos los negocios", icon: "bag", state: "bussiness"},
                       {id: 2, name: "Categorias", desc:"Categorias de los negocios", icon: "ios-list-outline", state: "categories"},
                       {id: 3, name: "Info", desc:"Información acerca de esta aplicación", icon: "ios-information-outline", state: "about"}
                      ];

    // Set Motion
    $timeout(function() {
        ionic.material.motion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionic.material.motion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionic.material.ink.displayEffect();
})


.controller('BussinessDetailCtrl', function($scope, $stateParams, $timeout,Bussiness, Offers, ValidateURL) {
    $scope.hasOffers = false;
    $scope.showOffers = false;
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    promise = ValidateURL.img($stateParams.bussiness_id);
    promise.then(function(response){
      $scope.imgURL = "http://162.243.55.11/teclapp/images/businesses/negocio-"+$stateParams.bussiness_id+".png";

    }, function(response) {
      $scope.imgURL = "img/happy-cat.jpg";
    })

    promise = Bussiness.detail($stateParams.bussiness_id);
    promise.then(function(response) {
      $scope.bussiness = response.data.business[0];
      console.log(response.data.business);
    });

    $scope.seeOffers = function() {
      promise = Offers.all($stateParams.bussiness_id);
      promise.then(function(response) {
        if (response.data.offers.length <= 0){
          $scope.hasOffers = true;  
        }else{
          $scope.showOffers = true;
        }

        $scope.offers = response.data.offers;
        console.log(response.data.offers);
      });
    }


    // Activate ink for controller
    ionic.material.ink.displayEffect();

    ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    ionic.material.motion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

});
