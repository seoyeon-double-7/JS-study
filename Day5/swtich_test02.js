function solution( month ){
    // 여기에 switch를 이용해 각 달의 날짜수를 반환하는 프로그램을 작성하세요.
    switch(month){
    case 2:
        return 28;
        break;
    case 4: case 6: case 9: case 11:
        return 30;
        break;
    default:
        return 31;
        break;
    }

}