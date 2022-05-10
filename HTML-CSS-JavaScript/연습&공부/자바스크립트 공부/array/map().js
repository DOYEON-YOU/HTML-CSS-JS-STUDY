const arr = [ 10, 20, 30, 40, 50 ];

arr.map((item, index) => {
    console.log((index+1) + "번 값", item);
});

arr.map((item, index) => {
  console.log((index+1) + "번 값의 두 배는", item * 2)
})

arr.map((item, index) => {
  console.log((index+1) + "번 값의 제곱은", item * item)
})


/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */


const data = [
    {id: 0, name: '홍길동', age: 10},
    {id: 1, name: '강호동', age: 20},
    {id: 2, name: '유재석', age: 30},
    {id: 3, name: '이효리', age: 40},
    {id: 4, name: '장채연', age: 50}
];

data.map(num => {
  console.log('아이디가 ' + num['id'] + '인 사람의 이름은 ' + num.name + '이고, 이 사람은 ' + num.age + '살이다.')
  // 여기서 num.key는 num['key']로 바꾸어 입력할 수 있다.
});

// array를 for문으로 돌릴 필요 없이 map() 으로 for문과 같이 순환을 돌릴 수 있다.
/**
 * @ map()의 정의 
 * ! Array.prototype.map()
 * 
 * @ 사용법 
 * ! arr.map(콜백함수(item(반환할 값), index(인덱스의 값)) => {
 * ! 실행하고 싶은 함수
 * ! }, this로 사용하고 싶은 값);
 * 
 * ? 여기서 this로 사용하고 싶은 값을 입력할 경우, 화살표 함수가 아닌 function(){}의 형식으로 사용해 주어야 한다.
*/