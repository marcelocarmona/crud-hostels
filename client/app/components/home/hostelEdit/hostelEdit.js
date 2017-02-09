import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hostelEditComponent from './hostelEdit.component';

let hostelEditModule = angular.module('hostelEdit', [
  uiRouter
])

.component('hostelEdit', hostelEditComponent)

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home.hostelEdit', {
      url: 'hostel/edit/:hostelId',
      resolve: { hostel: ($stateParams,hostelService) => hostelService.get($stateParams.hostelId) },
      component: 'hostelEdit'
    })
    .state('home.hostelCreate', {
      url: 'hostel/create',
      resolve: { hostel: ($stateParams,hostelService) => hostelService.new() },
      component: 'hostelEdit'
    });
})

.name;

export default hostelEditModule;
