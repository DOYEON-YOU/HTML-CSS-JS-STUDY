const nick = document.querySelector('#nick')
const color = document.querySelector('#color')
const commentInput = document.querySelector('#commentInput')
const commentBox = document.querySelector('.comments')

/**
 * - 컬러에 focus 되었을 때 색상 코드표 출력하고, 컬러 input에서 색상 담아오기
*/

color.addEventListener('focusin', function () {
  const colorPicker = document.querySelector('#colorPicker')
  colorPicker.style.display = 'inline-block'
})

function colorPick(btn) {
  color.value = btn.innerText
  document.querySelector('#colorPicker').style.display = 'none'
}

/**
 * @ 댓글 내용과 닉네임 불러와서 div에 담아준 뒤 commentBox에 넣어준다.
 */
function addComment() {
  const newComment = document.createElement('div')
  newComment.classList.add('comment')
  newComment.setAttribute('onclick', 'reComment(this)')
  newComment.innerHTML = `
  <span style="background-color:${color.value};">@${nick.value}</span>
  ${commentInput.value}
  <div class="recomment"></div>
`

  commentBox.appendChild(newComment)
  commentInput.value = ''
  nick.value = ''
  color.value = ''
}

/**
 * & 대댓글 쓸 수 있는 input 만들기
 */
function reComment(div) {
  const br = document.createElement('br')
  const input = document.createElement('input')
  const btn = document.createElement('button')
  btn.setAttribute('onclick', 'closeReComment(this)')
  btn.innerText = '게시'

  div.appendChild(br)
  div.appendChild(input)
  div.appendChild(btn)

  div.querySelector('input').addEventListener('click', function(){
    event.stopPropagation();
  })
}



/**
 * # 게시 버튼을 누르면 input과 버튼이 사라지게 하기
 */

function closeReComment(btn) {

  const div = btn.parentNode;

  const br = div.querySelector('br');
  const input = div.querySelector('input');
  const button = div.querySelector('button');

  const commentDetail = input.value;

  div.removeChild(br)
  div.removeChild(input)
  div.removeChild(button)

  /**
   * # 댓글 추가되게끔 하기
  */

  const recommentChild = div.querySelector('.recomment');
  const addReComment = document.createElement('div');
  addReComment.setAttribute('class','addReComment');
  addReComment.innerText = `└ ${commentDetail}`
  recommentChild.appendChild(addReComment);

  div.onclick = null
}

/**
 * ! 모두 입력되었을 때 댓글 게시하고, 하나라도 입력되어 있지 않으면 알림창 띄우기
 */

function post() {
  if (commentInput.value && nick.value && color.value) {
    addComment()
  } else {
    alert('댓글 혹은 닉네임, 색깔이 입력되지 않았습니다.')
  }
}

function enter() {
  if (window.event.keyCode == 13) {
    post()
  }
}

