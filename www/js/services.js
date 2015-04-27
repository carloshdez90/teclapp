angular.module('starter.services',[])

.factory('Bussiness', function($http) {
	var BaseUri = "http://162.243.55.11/teclapp/" ;
	
	return {
		all: function() {
			var endpoint = "services/businesses.json";
			var request = $http({
				method: "get",
				url: BaseUri + endpoint
			});
			return request;
		},
		some: function(step) {
			var endpoint = "services/businesses/"+step+".json";
			var request = $http({
				method: "get",
				url: BaseUri + endpoint
			});
			return request;
		},
		detail: function(bussines_id){
			var endpoint = "services/business/"+bussines_id+".json";
			var request = $http({
				method: "get",
				url: BaseUri + endpoint
			});
			return request;
		},
		by_category: function(category_id,step){
			var endpoint = "services/businessesByCategory/"+category_id+"/"+step+".json";
			var request = $http({
				method: "get",
				url: BaseUri + endpoint
			});
			return request;
		}
	}

})

.factory('Categories', function($http) {
	var BaseUri = "http://162.243.55.11/teclapp/" ;
	
	return {
		
		some: function(step) {
			var endpoint = "services/categories/"+step+".json";
			var request = $http({
				method: "get",
				url: BaseUri + endpoint
			});
			return request;
		}	
	}

})

.factory('ValidateURL', function($http) {
	var BaseUri = "http://162.243.55.11/teclapp/" ;
	
	return {
		
		img: function(bussiness_id) {
			var endpoint = "images/businesses/negocio-"+bussiness_id+".png";
			var request = $http({
				method: "get",
				url: BaseUri + endpoint
			});
			return request;
		}	
	}

})

.factory('Offers', function($http){
	var BaseUri = "http://162.243.55.11/teclapp/" ;
	return {
		all: function(bussines_id) {
			var endpoint = "services/offers/"+bussines_id+".json";
			var request = $http({
				method: "get",
				url: BaseUri + endpoint
			});
			return request;
		}
	}
});