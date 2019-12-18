const angularComponent = {
  template: ` <h1>I'm the angular component</h1>
              <div>value: {{$ctrl.value}}</div>
              <react-component value="$ctrl.value + 1" 
              add-one="$ctrl.addOne"></react-component>`,
              // Note addOne is not directly called,
              // but instead passed as parameter
  controller: function($scope) {
    const $ctrl = $scope.$ctrl;
    $ctrl.value = 1;
    $ctrl.addOne = () => {
      $ctrl.value = $ctrl.value + 1;
      console.log('added one', $ctrl.value);
      $scope.$apply();
    }
    
  }
};

export default angularComponent;
