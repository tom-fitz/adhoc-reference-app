app.controller("ProjectCtrl", function($scope, $rootScope, $location, ProjectFactory){

  $scope.projects = [];
  $scope.info = false;

  $scope.newProject = {};

  $scope.addNewPage = () => {
    $location.url("/new-project");
  }

  $scope.editPage = () => {
    $location.url("/edit-project");
  }

  $scope.deleteProject = (id) => {
    ProjectFactory.deleteProject(id).then((results) => {
      getProjects();
    }).catch((error) => {
      console.log("delete project error", error);
    });
  };

  let confirmation = () => {

  }

  var getProjects = () => {
    ProjectFactory.getProjects($rootScope.user.uid).then((results) => {
      $scope.projects = results;
    }).catch((error) => {
      console.log("get proj error", error);
    });
  };

  getProjects();



});
