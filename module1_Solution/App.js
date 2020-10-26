(function(){
    var app = angular.module("LunchCheck",[]);
    app.controller("LunchCheckController",LunchCheckFun);
    LunchCheckFun.$inject=["$scope"]
    function LunchCheckFun($scope){
          $scope.dishes=""
          $scope.result=""
          $scope.textBoxColor={"border":"1px solid black"};
          $scope.resultColor={"color":"black"}
          $scope.checkLunch=()=>{
             var dishArr = $scope.dishes.split(",");
             console.log(dishArr);
             var arrLength = dishArr.length;
             var dishesLength=0
                 for(var i=0;i<arrLength;i++){
                        if(dishArr[i]==""){
                            continue;
                        }else{
                            dishesLength++;
                        }
                 }
             if(dishesLength==0){
                $scope.result="please enter data first";
                $scope.textBoxColor={"border":"1px solid red"};
                $scope.resultColor={"color":"red"}
             }else{
                $scope.textBoxColor={"border":"1px solid green"};
                $scope.resultColor={"color":"green"}
             if( dishesLength<=3 ){
                $scope.result="Enjoy!";
             }else if(dishesLength>3){
                $scope.result="Too Much"
             }}
           
          }
    }
})();