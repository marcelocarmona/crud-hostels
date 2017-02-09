import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import HostelList from './hostelList/hostelList';
import HostelView from './hostelView/hostelView';
import HostelEdit from './hostelEdit/hostelEdit';
import common from 'common/common';
import './home.scss';

let homeModule = angular.module('home', [
  common,
  uiRouter,
  HostelList,
  HostelView,
  HostelEdit
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
