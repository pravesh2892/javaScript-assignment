// Your code here
function Product(name, price, manufacturer){
    this.name=name;
    this.price=price;
    this.manufacturer=manufacturer;
    // let tax;


this.getProductDetails = function(){
  return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`;  
}

this.setTax = function(amount){
tax = amount;
}
this.getTax = function(){
    return tax;
}

let calculateTotalPrice = function(){
return price+price*(tax/100);
}
this.getTotalPrice = function(){
    return calculateTotalPrice();
}
this.deleteMethod = function(methodName){
    delete this[methodName];
}
}