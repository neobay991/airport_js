'use strict';

describe('Plane',function() {
  var airport;
  var plane;
  beforeEach(function(){
    plane = new Plane();
    // So we need our plane object to interact with our airport object. We can stub the interaction in the plane unit test like so using a double:
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    // toHaveBeenCalledWith is a special matcher for interacting with spies
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can take-off from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    // toHaveBeenCalledWith is a special matcher for interacting with spies
    expect(airport.clearForTakeOff).toHaveBeenCalledWith();
  });
});
