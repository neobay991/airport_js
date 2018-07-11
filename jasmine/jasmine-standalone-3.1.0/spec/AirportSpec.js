'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('contains a plane in the hangar (capacity)', function(){
    airport.clearForLanding(plane);
    expect(airport._hangar.length).toEqual(1);
  });
  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for takeoff (capacity)', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport._hangar.length).toEqual(0);
  });

});
