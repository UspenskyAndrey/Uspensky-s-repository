var Calculator = (function() { 
var result = 0;
return {
  getResult: function() {
    return result;
  },
  reset: function() {
    return result  = 0;
  },
  add: function(val) {
    if (!isNaN(val)) {
    result += val;
     }
     function f(val1) {
       if (!isNaN(val1)) {
       result += val1;
       }
       return f;
     }
     f.toString = function() {return 'done' };
     return f;
  },
  substract: function(val) {
    if (!isNaN(val)) {
     result -= val;
     }
     function f(val1) {
       if (!isNaN(val1)) {
       result -= val1;
       }
       return f;
     }
     f.toString = function() {return 'done' };
     return f;
  },
  divide: function(val) { 
    if ((!isNaN(val)) && (val !==0)) {
     result /= val;
     }
     function f(val1) {
       if ((!isNaN(val1)) && (val1 !== 0)) {
       result /= val1;
       }
       return f;
     }
     f.toString = function() {
       return 'done';
       };
     return f;
  },
  multiply: function(val) {
    if (!isNaN(val)) {
     result *= val;
     }
     function f(val1) {
       if (!isNaN(val1)) {
       result *= val1;
       }
       return f;
     }
     f.toString = function() {return 'done' };
     return f;
  },

}})()