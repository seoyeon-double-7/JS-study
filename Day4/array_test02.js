var arr1 = [1,2,3,4,5]
var arr2 = [0,0,0,2]

arr.pop()   // 마지막 문자 삭제
arr.shift();    // 첫번째 문자 삭제
arr.push(7)     // 마지막 위치에 문자 추가
arr.unshift(3)  // 첫번째 위치에 문자 추가
arr.reverse();  // 순서 거꾸로
arr.sort(); //오름차순 정렬
arr1.concat(arr2)   //배열 합치기 (저장x -> 비파괴적 처리)
arr1.indexOf(2) // 앞에있는 2의 위치
arr1.lastIndexOf(2) //뒤에있는 2의 위치
