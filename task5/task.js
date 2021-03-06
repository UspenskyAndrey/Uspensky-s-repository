var Calculator = (function() { 
var result = 0;
return {
  getResult: function() {
    return result;
  },
  reset: function() {
    return result = 0;
  },
  add: function add(val) {
    if (!isNaN(val)) {
      result += val;
    }
    return add; 
  },
  substract: function sub(val) {
    if (!isNaN(val)) {
      result -= val;
    }
    return sub;
  },
  divide: function div(val) { 
    if ((!isNaN(val)) && (val !==0)) {
     result /= val;
     }
     return div;
  },
  multiply: function mul(val) {
    if (!isNaN(val)) {
     result *= val;
     }
     return mul;
  },

}})()