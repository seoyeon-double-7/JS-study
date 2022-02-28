var cond = false;
while(cond){
    console.log("이 구문은 실행되지 않습니다.");
}

do{
    console.log("이 구문 한번 실행됨")
}while (cond);

do{
     var ans = parseInt(prompt("1+1+2"));
}while(ans != 4)

console.log("맞췄습니다.")