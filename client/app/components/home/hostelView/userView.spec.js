import HostelViewModule from './hostelView'
import HostelViewComponent from './hostelView.component';
import HostelViewTemplate from './hostelView.html';

describe('HostelView', () => {
  let $rootScope, makeController, $state, $location;

  beforeEach(window.module(HostelViewModule));
  beforeEach(inject((_$rootScope_, $injector) => {
    $rootScope = _$rootScope_;
    $state = $injector.get('$state');
    $location = $injector.get('$location');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has value in template', () => {
      expect(HostelViewTemplate).to.match(/{{\s?value\s?}}/g);
    });

    it('has key in template', () => {
      expect(HostelViewTemplate).to.match(/{{\s?key\s?}}/g);
    });

    it('has $ctrl.hostel in template', () => {
      expect(HostelViewTemplate).to.match(/\s?\$ctrl\.hostel\s?/g);
    });


  });

  describe('Component', () => {
      // component/directive specs
      let component = HostelViewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HostelViewTemplate);
      });
  });
});
