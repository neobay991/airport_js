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

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
});

describe('under stormy conditions',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land', 'takeoff']);
  });

  it('does not clear planes for take off when stormy', function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot take off, weather is stormy');
  });

  it('does not clear planes to land when stormy', function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land, weather is stormy');
  });
});
