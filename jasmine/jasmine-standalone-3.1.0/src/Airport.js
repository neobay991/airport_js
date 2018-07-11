'use strict';

function Airport(weather){
  // underscore as a prefix to the _hangar variable
  // to indicate that this state should be private.

  // The typeof operator returns the type of a variable or an expression
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land, weather is stormy');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this._weather.isStormy()) {
    throw new Error('cannot take off, weather is stormy');
  }
  this._hangar.pop();

  // this method below to clear the array feels wrong,
  // but it will also work
  // this._hangar = [];
};
