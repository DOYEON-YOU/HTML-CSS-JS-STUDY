/**
 * @ 파일을 선택하면 div에 text(파일 이름)를 추가하면서 이미지 소스를 가져오는 코드
 */
function loadFile(input) {
  let file = input.files[0] //선택된 파일 가져오기

  //미리 만들어 놓은 div에 text(파일 이름) 추가
  let name = document.querySelector('.fileName')
  name.textContent = file.name

  //새로운 이미지 div 추가
  let newImage = document.createElement('img')
  newImage.setAttribute('onclick', 'zoom(this)')

  //이미지 source 가져오기
  newImage.setAttribute('alt', file.name) // alt 값에 file name 넣기
  newImage.src = URL.createObjectURL(file)
  newImage.style.display = 'none' //버튼을 누르기 전까지는 이미지를 숨긴다

  //이미지를 image-show div에 추가
  let container = document.querySelector('#images')
  container.appendChild(newImage)
}

/**
 * @ 선택한 이미지를 div에 업로드 해주는 코드
 */
let submit = document.querySelector('.submit')
submit.onclick = showImage //Submit 버튼 클릭시 이미지 보여주기

function showImage() {
  let newImage = document.getElementById('images').lastElementChild

  //이미지는 화면에 나타나고
  newImage.style.display = 'inline-block'
  document.querySelector('.fileName').textContent = null //기존 파일 이름 지우기

  let newDiv = document.createElement('div')
  document.querySelector('#images').append(newDiv)
  newDiv.style.display = 'inline-block'
  newDiv.addEventListener('mouseenter', function () {
    newDiv.style.cursor = 'pointer'
    newDiv.style.boxShadow = '3px 3px 20px 7px rgba(255, 255, 255, 0.582)'
    newDiv.style.transition = '0.3s'
  })
  newDiv.addEventListener('mouseleave', function () {
    newDiv.style.cursor = 'default'
    newDiv.style.boxShadow = 'none'
    newDiv.style.transition = '0.3s'
  })
  newDiv.append(newImage)
}

/**
 * @ 이미지 클릭했을 때 확대되게 하기
 */

function zoom(img) {
  let div = img.parentNode
  div.classList.add('popUp')
  // div 스타일 지정
  div.style.zIndex = '20'
  div.style.width = '100vw'
  div.style.height = '100vh'
  div.style.margin = '0'
  div.addEventListener('mouseover', function(){
    div.style.position = 'fixed'
    div.style.cursor = 'default'
    div.style.boxShadow = 'none'
    div.style.transition = '0.3s'
  })
  // img 크기
  img.style.width = '700px'
  img.style.height = 'auto'
  img.style.marginTop = '150px'

  // exit 버튼
  let exit = document.createElement('button')
  exit.setAttribute('class', 'exit')
  exit.textContent += 'X'

  div.append(exit)

  let btn = document.querySelector('.exit')

  btn.addEventListener('click', function () {
    div.classList.remove('popUp')
    div.style.width = '290px'
    div.style.height = '290px'
    div.style.margin = '13px'
    div.style.cursor = 'default'
    div.style.boxShadow = 'none'
    div.style.transition = '0.3s'

    img.style.width = '290px'
    img.style.height = '290px'
    img.style.marginTop = '0'

    this.parentElement.removeChild(this)
  })
}