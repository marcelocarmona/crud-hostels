import angular from 'angular';

/**
 * This is the store for users
 * I use the idea of https://github.com/paularmstrong/normalizr
 * schema definition and returning nested entities with their IDs, gathered in dictionaries.
 *
 * @class hostelService
 */
class hostelService {

  /**
   * Creates an instance of hostelService.
   *
   *
   * @memberOf hostelService
   */
  constructor() {

    this.hostels = {
      0: { id: 0 , name: 'Hotel Marcelo Carmona', stars:5, price: 4861, image:'profile' },
      1: { id: 1 , name: 'Hotel Emperador', stars:3, price: 1596, image:'default' },
      2: { id: 2 , name: 'Petit Palace San Bernardo', stars:4, price: 2145, image:'default' },
      3: { id: 3 , name: 'Hotel Nuevo Boston', stars:2, price: 861, image:'default' }
    }
    this.idGenerator = 3;
  }

  /**
   * Update and crate hostel
   *
   * @param {Object} hostel an hostel
   *
   * @memberOf hostelService
   */
  update(hostel) {
      this.hostels[hostel.id] = hostel;
  }

  /**
   * get an hostel
   *
   * @param {Number} hostelId
   * @returns {Object} an inmutable hostel
   *
   * @memberOf hostelService
   */
  get(hostelId) {
    return angular.copy(this.hostels[hostelId]);
  }

  /**
   *  Get all hostels
   *
   * @returns {Object} all hostels
   *
   * @memberOf hostelService
   */
  getAll() {
    return this.hostels;
  }

  /**
   * Delete an hostel
   *
   * @param {Number} hostelId
   *
   * @memberOf hostelService
   */
  delete(hostelId) {
    delete this.hostels[hostelId];
  }

  /**
   * Increment the space of hostels
   *
   * @returns {Object} an user
   *
   * @see hostelEdit - the module it is use in the resolve of the ui.route
   * @memberOf hostelService
   */
  new() {
    this.idGenerator = this.idGenerator + 1
    return {id: this.idGenerator, image: 'default'};
  }

  /**
   * Ask if there are more hostels
   *
   * @returns {Boolean}
   *
   * @memberOf hostelService
   */
  isEmpty() {
    return angular.equals(this.hostels, {})
  }

}

export default hostelService;
