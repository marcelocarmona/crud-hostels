import CommonModule from './common'
import hostelService from './hostel.service'

describe('HostelService', () => {
  let $rootScope, makeController, hostelService;

  beforeEach(window.module(CommonModule));
  beforeEach(inject((_hostelService_) => {
    hostelService = _hostelService_;
  }));


  it('has a hostelService property', () => {
    expect(hostelService).to.have.property('hostels');
  });

  it('create a hostel', () => {
    const hostelsLength1 = Object.keys(hostelService.hostels).length;

    const newHostel = hostelService.new();
    newHostel.name = 'name test';

    hostelService.update(newHostel);

    const hostelsLength2 = Object.keys(hostelService.hostels).length;

    expect(hostelsLength2).to.equal(hostelsLength1 + 1);
    expect(hostelService.get(newHostel.id).name).to.equal('name test');
  });

  it('delete a hostel', () => {
    const hostelsLength1 = Object.keys(hostelService.hostels).length;

    const newHostel = hostelService.new();
    newHostel.name = 'name test';

    hostelService.update(newHostel);
    hostelService.delete(newHostel.id);

    const hostelsLength2 = Object.keys(hostelService.hostels).length;

    expect(hostelsLength2).to.equal(hostelsLength1);
    expect(hostelService.hostels[newHostel.id]).to.equal(undefined);
  });

  it('update a hostel', () => {
    const hostelsLength1 = Object.keys(hostelService.hostels).length;

    const newHostel = hostelService.new();
    newHostel.name = 'name test';
    newHostel.stars = '3';
    newHostel.price = '1980';
    newHostel.image = 'image_test'

    hostelService.update(newHostel);

    expect(hostelService.hostels[newHostel.id].name).to.equal('name test');
    expect(hostelService.hostels[newHostel.id].stars).to.equal('3');
    expect(hostelService.hostels[newHostel.id].price).to.equal('1980');
    expect(hostelService.hostels[newHostel.id].image).to.equal('image_test');
  });

  it('get an hostel', () => {
    const hostelsLength1 = Object.keys(hostelService.hostels).length;

    const newHostel = hostelService.new();
    newHostel.name = 'name test';
    newHostel.stars = '3';
    newHostel.price = '1980';
    newHostel.image = 'image_test'

    hostelService.update(newHostel);

    expect(hostelService.hostels[newHostel.id].name).to.equal(hostelService.get(newHostel.id).name);
    expect(hostelService.hostels[newHostel.id].stars).to.equal(hostelService.get(newHostel.id).stars);
    expect(hostelService.hostels[newHostel.id].price).to.equal(hostelService.get(newHostel.id).price);
    expect(hostelService.hostels[newHostel.id].image).to.equal(hostelService.get(newHostel.id).image);
  });

  it('get all hostels', () => {
    const newHostel = hostelService.new();
    newHostel.name = 'name test';
    newHostel.stars = '3';
    newHostel.price = '1980';
    newHostel.image = 'image_test'

    hostelService.update(newHostel);

    const hostelsLength1 = Object.keys(hostelService.hostels).length;
    const hostelsLength2 = Object.keys(hostelService.getAll()).length;

    expect(hostelsLength2).to.equal(hostelsLength1);
  });
});
