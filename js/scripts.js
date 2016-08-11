$(document).ready(function() {
  $("form").submit(function(event) {
    var triangleSide1 = parseFloat($("#side1").val());
    var triangleSide2 = parseFloat($("#side2").val());
    var triangleSide3 = parseFloat($("#side3").val());

    if (triangleSide1 === triangleSide2 && triangleSide1 === triangleSide3) {
      alert("Equilateral Triangle!");
    } else if (triangleSide1 === triangleSide2 || triangleSide1 === triangleSide3 || triangleSide2 === triangleSide3) {
      alert("Isosceles Triangle!");
    } else if ((triangleSide1 + triangleSide2) <= triangleSide3 || (triangleSide1 + triangleSide3) <= triangleSide2 || (triangleSide2 + triangleSide3) <= triangleSide1) {
      alert("Not a Triangle, yo!");
    } else if (triangleSide1 !== triangleSide2 && triangleSide1 !== triangleSide3 && triangleSide2 !== triangleSide3) {
      alert("Scalene Triangle!");
    }
    
    event.preventDefault();
  });
});
