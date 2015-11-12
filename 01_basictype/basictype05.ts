enum Attribute { Law, Neutral, Chaos };

var attr1: Attribute = Attribute.Law;
var attr2: Attribute = Attribute.Neutral;
var attr3: Attribute = Attribute.Chaos;

console.log(attr1);
console.log(attr2);
console.log(attr3);

enum Color { Red = 1.1, Green = 2, Blue = 3 };

console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);

var c1: Color = Color.Red;

console.log(Color[c1]);
console.log(Color[Color.Green]);
console.log(Color[2]);
console.log(Color[1.1]);
console.log(Color[0]);