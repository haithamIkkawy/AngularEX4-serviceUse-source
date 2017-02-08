var app = angular.module("myApp", []);
app.service("myService", function () {
    this.students = [];
 
    this.addS = function (name, image) {
        this.students.push({
            name: name,
            image:image
        });
       
        

    }

this.remove = function (i) {
        this.students.splice(i,1);
        

    }

this.Update= function(i,value){
    alert(value);
    this.students[i].name = value;
   
      
   
}

});

app.controller("ctrl", function ($scope, myService) {

    $scope.students = myService.students;
     
$scope.Update=function(i,j){

   var value= $scope.Up;

    myService.Update(i,j);

    
}

    $scope.addS = function () {
        var stdname = $scope.name;
        var image=$scope.image;
       
        myService.addS(stdname,image);
      

    }
     $scope.remove = function (i) {
    
  myService.remove(i);
    }
  
     
});