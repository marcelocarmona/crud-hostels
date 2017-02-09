import template from './hostelList.html';
import controller from './hostelList.controller';
import './hostelList.scss';

let hostelListComponent = {
  restrict: 'E',
  bindings: {
    hostels: '<'
  },
  template,
  controller
};

export default hostelListComponent;
