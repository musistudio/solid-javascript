// Square
// ------

var Square = function(){};
Square.prototype = Object.create(Rectangle);

Square.prototype.setSize = function(size){
  this.height = size;
  this.width = size;
};

Square.prototype.setHeight = function(height){
  this.setSize(height);
};

Square.prototype.setWidth = function(width){
  this.setSize(width);
};

// Test
// ----

describe("area of a square", function(){
  var square = new Square();
  square.setHeight(4);
  square.setWidth(5);

  it("should be size, squared", function(){
    expect(square.area()).toBe(20);
  });
});