define(['services/flashCardService', 'plugins/router'], function(service, router) {

   var vm = {};
   vm.catalogNames = [];

   vm.activate = function() {
      return service.catalogNames()
         .done(function(data) {
            vm.catalogNames = data;
         });
   };

   vm.goToCards = function(name) {
      system.log('Go to: ' + name);
      router.navigate('#cards/' + encodeURIComponent(name) + "/id/0");
   };

   return vm;
});