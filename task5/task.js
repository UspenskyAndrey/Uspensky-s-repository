var Calculator = {
  result: 0,
  getResult: function() {
    return this.result;
  },
  reset: function() {
    return this.result  = 0;
  },
  add: function(val) {
    if (!isNaN(val)) {
     this.result += val;
     }
     function f(val1) {
       if (!isNaN(val1)) {
       Calculator.result += val1;
       }
       return f;
     }
     f.toString = function() {return 'done' };
     return f;
  },
  substract: function(val) {
    if (!isNaN(val)) {
     this.result -= val;
     }
     function f(val1) {
       if (!isNaN(val1)) {
       Calculator.result -= val1;
       }
       return f;
     }
     f.toString = function() {return 'done' };
     return f;
  },
  divide: function(val) { 
    if ((!isNaN(val)) && (val !==0)) {
     this.result /= val;
     }
     function f(val1) {
       if ((!isNaN(val1)) && (val1 !== 0)) {
       Calculator.result /= val1;
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
     this.result *= val;
     }
     function f(val1) {
       if (!isNaN(val1)) {
       Calculator.result *= val1;
       }
       return f;
     }
     f.toString = function() {return 'done' };
     return f;
  },

}