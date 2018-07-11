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
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  this._hangar = [];
};
