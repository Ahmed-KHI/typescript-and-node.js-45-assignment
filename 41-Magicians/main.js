// Define a function to print each magician name from an Array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an Array containing magicians name
var magician_names = ["David Copperfield", "Criss Angel", "Harry Houdini"];
// Call the function to print each magician name
show_magicians(magician_names);
