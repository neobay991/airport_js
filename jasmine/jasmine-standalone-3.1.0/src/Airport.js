'use strict';

function Airport(){
  // underscore as a prefix to the _hangar variable
  // to indicate that this state should be private.
  this._hangar = [];
}
Airport.prototype.planes = function(){
  return this._hangar;
};
Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot land, weather is stormy')
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot take off, weather is stormy')
  }
  this._hangar.pop();
  // this method to clear the array feels wrong,
  // but it will also work
  // this._hangar = [];
};
Airport.prototype.isStormy = function() {
  return false;
};
