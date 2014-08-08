'use strict';

describe('Service: superCoolFirebase', function () {

  // load the service's module
  beforeEach(module('hw4App'));

  // instantiate service
  var superCoolFirebase;
  beforeEach(inject(function (_superCoolFirebase_) {
    superCoolFirebase = _superCoolFirebase_;
  }));

  it('should do something', function () {
    expect(!!superCoolFirebase).toBe(true);
  });

});
