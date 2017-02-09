import HostelEditModule from './hostelEdit'
import HostelEditController from './hostelEdit.controller';
import HostelEditComponent from './hostelEdit.component';
import HostelEditTemplate from './hostelEdit.html';

describe('HostelEdit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HostelEditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HostelEditController();
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
    it('has "The name is required" in template', () => {
      expect(HostelEditTemplate).to.match(/\s?The name is required\s?/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HostelEditComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HostelEditTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HostelEditController);
      });
  });
});
