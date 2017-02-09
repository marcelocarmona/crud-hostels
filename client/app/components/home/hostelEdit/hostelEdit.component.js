import template from './hostelEdit.html';
import controller from './hostelEdit.controller';
import './hostelEdit.scss';

let hostelEditComponent = {
  restrict: 'E',
  bindings: {
    hostel: '<'
  },
  template,
  controller
};

export default hostelEditComponent;
