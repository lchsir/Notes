var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
;
var c11 = Color.blue; //1      var a :string = '111'
var c21 = Color[2]; // green
