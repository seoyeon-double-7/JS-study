var uninitialized_var;
var obj={
    x:1,
    y:2
}
var null_var = null;
console.log(obj.x) //1
console.log(obj.y)  //2
console.log(obj.z)  //undefined
console.log(typeof(obj.z))  //undefined
console.log(null_var)   //null
console.log(typeof(null_var))   //object
// null값이 들어있는 null_var의 자료형은 object임
// undefined는  선언만하고 초기화가 되지 않은 변수 타입의 값, 정의되지 않은 속성의 타입또는 값을 말함
// null은 개발자가 명시적으로 비어있는 상태를 설정 한것!
