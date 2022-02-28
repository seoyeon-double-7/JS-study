var count = 0;

while(true){
    var ans;
    ans = parseInt(prompt("1+1+2"));
    if(ans != 4){
        console.log(++count + "번 들렸어요. 다시 시작하세요.")
        continue;
    }
    ans = parseInt(prompt("1+5+2"));
    if(ans != 8){
        console.log(++count + "번 들렸어요. 다시 시작하세요.")
        continue;
    }
    ans = parseInt(prompt("1*1+2"));
    if(ans != 3){
        console.log(++count + "번 들렸어요. 다시 시작하세요.")
        continue;
    }
    break;
}
console.log("수고하셨습니다.")