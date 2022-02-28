var obj = {
    name: "object",
    age: 10,
    weight: 5
}
var sum = 0;
for (
a
 in
obj
 ){
    if( typeof(
obj[a]
 ) == "number" ){
        sum = sum +
obj[a]
 ;
    }
}

console.log("sum :", sum);