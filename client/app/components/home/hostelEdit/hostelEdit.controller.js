/**
 * controller for create or update a hostel
 *
 * @class HostelEditController
 */
class HostelEditController {
  constructor($state, hostelService) {
    'ngInject';
    this.$state = $state;
    this.hostelService = hostelService;
  }

  /**
   * Update or create a new hostel
   *
   * @memberOf HostelEditController
   */
  save() {
    this.hostelService.update(this.hostel);
    this.$state.go('home.hostel', {hostelId: this.hostel.id});
  }
}

export default HostelEditController;
