(function() {
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchList = ""
        $scope.checkLunch = checkLunch;

        function checkLunch() {
            if (!$scope.lunchList) {
                $scope.outputStyle={'color': 'red'};
                $scope.outputIndicator={'border': 'solid 1px', 'border-color': 'red'};
                $scope.output="Please enter data first."
                return;
            }

             var arrayOfLunch = $scope.lunchList.split(',');

             var numOfLunch = 0;

             arrayOfLunch.forEach(function(lunch) {
                if(lunch && lunch.trim()) {
                    numOfLunch++;
                }

             });

            $scope.outputStyle={color: 'green'};
            $scope.outputIndicator={'border': 'solid 1px', 'border-color': 'green'};
             if (numOfLunch <= 3) {
                $scope.output="Enjoy";
            } else {
                $scope.output="Too much!";
            }
        }
    }
})();