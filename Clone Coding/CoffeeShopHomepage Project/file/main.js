// 검색창 요소 (Search) 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
//검색창 요소를 클릭하면 실행하기
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});
// 검색창이 포커스 되었을 때 통합검색이라는 placeholder 표시하기
searchInputEl.addEventListener('focus', function(){
  searchInputEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'Search here!');
});
// 검색창 포커스가 중지되었을 때 placeholder 값 지우기
searchInputEl.addEventListener('blur', function(){
  searchInputEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', function(){
  console.log(Math.ceil(window.scrollY));
  if(window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
})