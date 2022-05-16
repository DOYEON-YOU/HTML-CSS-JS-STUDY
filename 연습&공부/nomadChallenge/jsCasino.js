const rangeValue = document.getElementById('rangeValue');
const inputValue = document.getElementById('inputValue');
const playBtn = document.getElementById('play');

playBtn.addEventListener('click', function(){
  let range = Math.floor(Math.random() * rangeValue.value+1);
  if(rangeValue.value < 0){
    document.getElementById('valueCheck').innerText="범위값에 음수를 입력할 수 없습니다."
  } else{
    document.getElementById('valueCheck').innerText=`당신의 선택: ${inputValue.value}, 기계의 선택: ${range}`
    if(inputValue.value == range){
      document.getElementById('value').innerText="You Won!"
    } else{
      document.getElementById('value').innerText="You Lose!"
    }
  }
})