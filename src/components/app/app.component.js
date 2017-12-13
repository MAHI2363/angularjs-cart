angular.module('angularjs-cart')
    .component('app', {
        templateUrl: 'src/components/app/app.component.html',
        controller: function(){
            this.onMenuselect = function(name){
                console.log(name);
            }            
        }
    });