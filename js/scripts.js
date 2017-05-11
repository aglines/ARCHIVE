// BACKEND LOGIC
var mainFunction = function(input) {
// onamotapoeia

// Create a CONSTRUCTOR, "Image".
//    The constructor has empty key:value pairs
function Image(name, description, tag) {
  this.name = name;
  this.description = description;
  this.tag = tag;
}

// Create an OBJECT, "puff",
//      which is an instance of the constructor.
//      puff fills in key:value pairs
//        in the same order we defined them in the constructor
var puff = new Image("puffName", "cloud", "puffTag");

// puff is now the OBJECT
// Image is now the CONSTRUCTOR

//============================================
//      PROTOTYPES

// Create a CONSTRUCTOR, "Sound".
function Sound(name, description, tag) {
  this.name = name;
  this.description = description;
  this.tag = tag;
}

// Create a PROTOTYPE, "Sound.prototype.play"
Sound.prototype.play = function() {
  return this.name + " " + this.tag;
}

// play is now the METHOD on the PROTOTYPE,
// Sound.play is not a thing we will ever use,
//    because you have to instantiate a new Sound object
//    in order to get to its method

// Create an OBJECT that uses that METHOD
var womp = new Sound("WOMP ", "it's a sound", "THERE IT IS");

console.log(womp.play());

}; // END OF BACKEND FUNCTION


// FRONTEND LOGIC
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var input = $("#userInput").val();
    var output = mainFunction(input);
    $("#output").text(output);
  });
});
