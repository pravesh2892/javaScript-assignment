class FooBar{
    foo;
    bar;
    constructor(a,b){
        this.foo=a;
        this.bar=b;
    }
   }
   
   function solve(obj, a, b){
      // obj: object of class FooBar, with foo and bar as its attributes set from input
      // should somehow return the following
      // return obj.foo + obj.bar + func(a, b);
      const {foo, bar}= obj;
      return foo + bar + func.call(obj,a,b);
   }