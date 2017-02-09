import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hostelViewComponent from './hostelView.component';

let hostelViewModule = angular.module('hostelView', [
  uiRouter
])

.component('hostelView', hostelViewComponent)

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home.hostel', {
      url: 'hostel/:hostelId',
      resolve: { hostel: ($stateParams,hostelService) => hostelService.get($stateParams.hostelId) },
      component: 'hostelView'
    });
})

.name;

export default hostelViewModule;
