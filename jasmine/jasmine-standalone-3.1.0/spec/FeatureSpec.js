'use strict';

describe('Feature Test:',function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to land at
  //   an airport and confirm that it has landed
  it('plane can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });


// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from
//   an airport and confirm that it is no longer in the airport
  it('plane can be instructed to take off from a airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy
  it('plane cannot take off when stormy', function(){
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){plane.takeoff();}).toThrowError('cannot take off, weather is stormy');
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when weather is stormy
  it('plane cannot land when stormy', function(){
    // plane.land(airport);
    // plane.takeoff();
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){plane.land(airport);}).toThrowError('cannot land, weather is stormy');
    expect(airport.planes()).not.toContain(plane);
  });
});
