import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hostelListComponent from './hostelList.component';

let hostelListModule = angular.module('hostelList', [
  uiRouter
])

.component('hostelList', hostelListComponent)

.name;

export default hostelListModule;
