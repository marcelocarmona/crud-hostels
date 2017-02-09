import template from './hostelView.html';
import './hostelView.scss';

let hostelViewComponent = {
  restrict: 'E',
  bindings: {
    hostel: '<'
  },
  template
};

export default hostelViewComponent;
