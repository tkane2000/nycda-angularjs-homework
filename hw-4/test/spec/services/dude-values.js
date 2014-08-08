'use strict';

describe('Service: DudeValues', function () {

  // load the service's module
  beforeEach(module('hw4App'));

  // instantiate service
  var DudeValues;
  beforeEach(inject(function (_DudeValues_) {
    DudeValues = _DudeValues_;
  }));

  it('should do something', function () {
    expect(!!DudeValues).toBe(true);
  });

});
