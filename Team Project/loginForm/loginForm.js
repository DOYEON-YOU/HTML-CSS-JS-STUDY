/**
 * & 쿼리 쓰지 않고 오직 자바스크립트로만 해보기
 */

const btn = document.getElementById('submit')

btn.addEventListener('click', function () {
  const email = document.getElementById('email')
  const password = document.getElementById('pwd')

  // email에 @가 안 들어가거나, .com으로 끝나지 않으면 input.value를 지우고 알림창을 띄움
  if (email.value.search('@') || email.value.endsWith(/[\.kr\.net\.com]/)) {
    alert('올바른 이메일을 입력하세요.')
    document.getElementById('email').value = ''
    document.getElementById('pwd').value = ''
  }
  // email에 @, ., -, _를 제외한 특수문자가 입력되면 input.value를 지우고 알림창을 띄움
  else if (
    !!email.value.search(/[\{\}\[\]\/?,;:|\)*~`!^\+<>\#$%&\\\=\(\'\"]/gi) ===
    true
  ) {
    alert('[ @ | . | - | _ ]를 제외한 특수문자는 입력하실 수 없습니다. ')
    document.getElementById('email').value = ''
    document.getElementById('pwd').value = ''
  }
})
