function printTimesTable(a){
    var i = 1;  //변수의 쉐도잉
    for( i = 1 ; i <= 9 ; i++ ){
        console.log( a + " * " + i + " = " + a*i );
    }
}

for( var i = 2 ; i <= 9 ; i++ ){
    printTimesTable(i);
}