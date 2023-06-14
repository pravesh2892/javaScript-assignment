Array.prototype.myMap = function (cb) {
    const newArray =[];
    for(let i=0; i<this.length; i++){
      newArray.push(cb(this[i], i, this));
    }
    return newArray;
  };
  
  Array.prototype.myReduce = function (cb, initialValue) {
    let accumaltor = initialValue !==undefined ? this[0] : initialValue;
    const startIndex = initialValue !==undefined ? 1:0;
    for(let i = startIndex; i<this.length; i++){
      accumaltor = cb(accumaltor, this[i], i, this);
  
    }
    return accumaltor;
  };
  
  Array.prototype.myFilter = function (cb) {
    const newArray = [];
    for(let i=0; i<this.length; i++){
      if(cb(this[i], i, this)){
        newArray.push(this[i]);
      }
    }
    return newArray;
  };