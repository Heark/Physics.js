Object.prototype.squared = function() {
 if( typeof this === 'number' ) {
  return this * this;
 } else {
 throw new Error("Only number may be squared");
 }
 
}
var getDistance = function(time, acceleration, initial_velocity) {
   this.time = t;
   this.acceleration = a;
   this.initial_veloticty = vi;
 return vi * t + 0.5 * a * t.squared();
}
