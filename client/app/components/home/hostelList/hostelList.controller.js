/**
 * Controller for the list of the hostels
 *
 * @class HostelListController
 */
class HostelListController {
  constructor(hostelService, $state) {
    'ngInject';
    this.hostelService = hostelService;
    this.$state = $state;
  }

  /**
   *
   * get all de hostel from the store
   *
   * @memberOf HostelListController
   */
  $onInit() {
    this.hostels = this.hostelService.getAll();
  }

  /**
   * go to the edit hostel panel
   *
   * @param {number} hostelId
   *
   * @memberOf HostelListController
   */
  edit(hostelId) {
    this.$state.go('home.hostelEdit', { hostelId })
  }

  /**
   *  Load an image
   *
   * @param {String} image
   * @returns current url
   *
   * @memberOf HostelListController
   */
  loadImage(image) {
    return require(`common/images/${image}.jpg`);
  }


  /**
   *
   *
   * @param {any} stars
   *
   * @memberOf HostelListController
   */
  getNumber(stars) {
    return new Array(stars);
  }
}

export default HostelListController;
