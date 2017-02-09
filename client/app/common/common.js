import angular from 'angular';
import hostelService from './hostel.service';

const commonModule = angular.module('app.common', [])
.service('hostelService', hostelService)
.name;

export default commonModule;
