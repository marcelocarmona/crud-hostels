import HostelListModule from './hostelList'
import HostelListController from './hostelList.controller';
import HostelListComponent from './hostelList.component';
import HostelListTemplate from './hostelList.html';

describe('HostelList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HostelListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HostelListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a hostelService property', () => {
      let controller = makeController();
      expect(controller).to.have.property('hostelService');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has hostel.name in template', () => {
      expect(HostelListTemplate).to.match(/{{\s?\hostel\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HostelListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HostelListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HostelListController);
      });
  });
});
