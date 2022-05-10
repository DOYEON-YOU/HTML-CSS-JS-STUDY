/*

  <ul id="pagenation">
    <li>1</li>
    <li>2</li>
  </ul>
  pagination
  게시판 글 보는 로직이 아님. => 게시판 글 번호 필요
  이 로직은 오로지 게시판의 페이지 숫자들을 컨트롤하기 위한 로직.

  기본 흐름
  [사용자]-> [app]->[서버]->[app]->[사용자]
  22페이지 클릭 -> currentPage: 22

  pagination 함수는 기본적으로 인자를 하나 이상 가져갈 수 밖에 없다.
  만약에 인자를 하나도 안가져가면? -> 요청 자체를 보내지 않기 때문에 수를 받아와서 변화를 줄 꺼리가 없음
*/
// currentPage () : 현재 내가 보고 있는 페이지
// totalCount (234개) : 총 게시물 숫자 - 왜 인자로 값을 안받을까요?
// 이미 서버측에서 넘어온 값이 있기 때문. 사용자로부터 굳이 값을 받을 필요가 없음. (코드 절약)
function renderPagination(currentPage) {
  if (_totalCount <= 10) return
}

// math.ceil-천장() -> 소숫점 이하를 올림한다고 했죠./ 천장으로 올려친다
// math.floor-바닥 => 소숫점 이하를 버린다. 바닥으로 꺼뜨린다
// 100개 => 한 페이지당 10게 234/10 = 23.4 -> 24페이지로
let totalPage = Math.ceil(_totalCount / 10) // -> 24

// 1페이지그룹 -> 1~10
// 2페이지그룹 -> 11~20
// 3페이지그룹 ->
let pageGroup = Math.ceil(22 / 10) // 2,2 -> 3 -> []

// 페이지 그룹에서 마지막 숫자
let last = pageGroup * 10 // pagination 화면에 띄워줄 마지막 숫자

// 게시물의 양이 적었을 때 totalpage가 10보다 작을 경우 totalpage
if (last > totalPage) last = totalPage // 만약에 전체페이지 수가 pagination 화면에 띄워줄 마지막 숫자보다 작으면 둘을 같게 한다.

// last = 20

// 페이지 그룹에서 첫번째 숫자
let first = last - (10 - 1) <= 0 ? 1 : last - (10 - 1)
// javascript 이항 연산자 - 삼항 연산자
// 이항 연산자 : 항이 두개 (예시 : < <= > >= ==) a > b
// 삼항 연산자 : 항이 세개 (예시 [조건] ? true일때  : false일때)
/*
  화면에 그려질 첫 번째 페이지 : 화면에 그려질 마지막 페이지 - (한 화면에 나타낼 페이지 - 1)
	(단, 계산된 값이 0 이하이면 첫번째 페이지는 1이다.)

  화면에 그려질 마지막 페이지 : 화면에 보여질 페이지 그룹 * 한 화면에 나타낼 페이지
	(단, 계산된 값이 총 페이지수보다 많으면 마지막 페이지는 은 총 페이지 수이다.)
  */
// 삼항연산자 - ? : 구문을

// 10개씩 보여주기로 했다 [1 2 3 4 5 6 7 8 9 10] [11 12 13 14 15... 20] [15 16 17 18 19 20 21 22 23 24]
/*
<< < [15 16 17 18 19 20 21 22 23 24] >
last => 24
first => 15
let next = last + 1; 25
let prev = first - 1; 14

*/
// javascript : Fragment 실제로 DOM을 생성하지 않아요 Fragment파편 DOM에 추가하는것.
const fragmentPage = document.createDocumentFragment()

if (prev > 0) {
  let allpreli = document.createElement('li')
  // innerHTML 얘보다 작업을 덜하고 더 빨라요

  /**
   * element.insertAdjacentHTML(position, text);
        position은 아래 있는 단어만 사용 가능하다.

        'beforebegin'
        element 앞에 
        'afterbegin'
        element 안에 가장 첫번째 child
        'beforeend'
        element 안에 가장 마지막 child
        'afterend'
        element 뒤에
   * 
        &lt; <
        &gt; >
   */

  allpreli.insertAdjacentHTML(
    'beforeend',
    `<a href='#js-bottom' id='allprev'>&lt;&lt;</a>`
  )

  let preli = document.createElement('li')
  preli.insertAdjacentHTML(
    'beforeend',
    `<a href='#js-bottom' id='prev'>&lt;</a>`
  )

  fragmentPage.appendChild(allpreli)
  fragmentPage.appendChild(preli)
}

for (let i = first; i <= last; i++) {
  const li = document.createElement('li')
}
/*

  <ul id="pagenation">
    <li>1</li>
    <li>2</li>
  </ul>
  pagination
  게시판 글 보는 로직이 아님. => 게시판 글 번호 필요
  이 로직은 오로지 게시판의 페이지 숫자들을 컨트롤하기 위한 로직.

  기본 흐름
  [사용자]-> [app]->[서버]->[app]->[사용자]
  22페이지 클릭 -> currentPage: 22

  pagination 함수는 기본적으로 인자를 하나 이상 가져갈 수 밖에 없다.
  만약에 인자를 하나도 안가져가면? -> 요청 자체를 보내지 않기 때문에 수를 받아와서 변화를 줄 꺼리가 없음
*/
// currentPage () : 현재 내가 보고 있는 페이지
// totalCount (234개) : 총 게시물 숫자 - 왜 인자로 값을 안받을까요?
// 이미 서버측에서 넘어온 값이 있기 때문. 사용자로부터 굳이 값을 받을 필요가 없음. (코드 절약)
function renderPagination(currentPage) {
  if (_totalCount <= 10) return

  // math.ceil-천장() -> 소숫점 이하를 올림한다고 했죠./ 천장으로 올려친다
  // math.floor-바닥 => 소숫점 이하를 버린다. 바닥으로 꺼뜨린다
  // 100개 => 한 페이지당 10게 234/10 = 23.4 -> 24페이지로
  let totalPage = Math.ceil(_totalCount / 10) // -> 24

  // 1페이지그룹 -> 1~10
  // 2페이지그룹 -> 11~20
  // 3페이지그룹 ->
  let pageGroup = Math.ceil(22 / 10) // 2,2 -> 3 -> []

  // 페이지 그룹에서 마지막 숫자
  let last = pageGroup * 10 // pagination 화면에 띄워줄 마지막 숫자

  // 게시물의 양이 적었을 때 totalpage가 10보다 작을 경우 totalpage
  if (last > totalPage) last = totalPage // 만약에 전체페이지 수가 pagination 화면에 띄워줄 마지막 숫자보다 작으면 둘을 같게 한다.

  // last = 20

  // 페이지 그룹에서 첫번째 숫자
  let first = last - (10 - 1) <= 0 ? 1 : last - (10 - 1)
  // javascript 이항 연산자 - 삼항 연산자
  // 이항 연산자 : 항이 두개 (예시 : < <= > >= ==) a > b
  // 삼항 연산자 : 항이 세개 (예시 [조건] ? true일때  : false일때)
  /*
  화면에 그려질 첫 번째 페이지 : 화면에 그려질 마지막 페이지 - (한 화면에 나타낼 페이지 - 1)
	(단, 계산된 값이 0 이하이면 첫번째 페이지는 1이다.)

  화면에 그려질 마지막 페이지 : 화면에 보여질 페이지 그룹 * 한 화면에 나타낼 페이지
	(단, 계산된 값이 총 페이지수보다 많으면 마지막 페이지는 은 총 페이지 수이다.)
  */
  // 삼항연산자 - ? : 구문을

  // 10개씩 보여주기로 했다 [1 2 3 4 5 6 7 8 9 10] [11 12 13 14 15... 20] [15 16 17 18 19 20 21 22 23 24]
  /*
  << < [15 16 17 18 19 20 21 22 23 24] >
  last => 24
  first => 15
  let next = last + 1; 25
  let prev = first - 1; 14

  */
  // javascript : Fragment 실제로 DOM을 생성하지 않아요 Fragment파편 DOM에 추가하는것.
  const fragmentPage = document.createDocumentFragment()

  if (prev > 0) {
    let allpreli = document.createElement('li')
    // innerHTML 얘보다 작업을 덜하고 더 빨라요

    /**
     * element.insertAdjacentHTML(position, text);
          position은 아래 있는 단어만 사용 가능하다.

          'beforebegin'
          element 앞에 
          'afterbegin'
          element 안에 가장 첫번째 child
          'beforeend'
          element 안에 가장 마지막 child
          'afterend'
          element 뒤에
     * 
          &lt; <
          &gt; >
     */

    allpreli.insertAdjacentHTML(
      'beforeend',
      `<a href='#js-bottom' id='allprev'>&lt;&lt;</a>`
    )

    let preli = document.createElement('li')
    preli.insertAdjacentHTML(
      'beforeend',
      `<a href='#js-bottom' id='prev'>&lt;</a>`
    )

    fragmentPage.appendChild(allpreli)
    fragmentPage.appendChild(preli)
  }

  for (let i = first; i <= last; i++) {
    const li = document.createElement('li')
    li.insertAdjacentHTML(
      'beforeend',
      `<a href='#js-bottom' id='page-${i}' data-num='${i}'>${i}</a>`
    )
    fragmentPage.appendChild(li)
  }

  if (last < totalPage) {
    let allendli = document.createElement('li')
    allendli.insertAdjacentHTML(
      'beforeend',
      `<a href='#js-bottom'  id='allnext'>&gt;&gt;</a>`
    )

    let endli = document.createElement('li')
    endli.insertAdjacentHTML(
      'beforeend',
      `<a  href='#js-program-detail-bottom'  id='next'>&gt;</a>`
    )

    fragmentPage.appendChild(endli)
    fragmentPage.appendChild(allendli)
  }

  document.getElementById('js-pagination').appendChild(fragmentPage)
  // 페이지 목록 생성

  /*
    <ul>
      <>
        <li>
          <a href='#js-bottom' id='allprev'>&lt;&lt;</a> 
        </li>
        <li>
          <a href='#js-bottom' id='prev'>&lt;</a>
        </li>
        <li>
          <a href='#js-bottom' id='page-15' data-num='15'>15</a>
          <a href='#js-bottom' id='page-16' data-num='16'>15</a>
          <a href='#js-bottom' id='page-17' data-num='17'>15</a>
          <a href='#js-bottom' id='page-18' data-num='18'>15</a>
          <a href='#js-bottom' id='page-19' data-num='19'>15</a>
          <a href='#js-bottom' id='page-20' data-num='15'>15</a>
          <a href='#js-bottom' id='page-21' data-num='15'>15</a>
          <a href='#js-bottom' id='page-22' data-num='15'>15</a>
          <a href='#js-bottom' id='page-23' data-num='15'>15</a>
          <a href='#js-bottom' id='page-24' data-num='15'>15</a>

        </li>

      </>
    </ul>


  */

  // 15 16 17 18 19 20 21 22 23 24
  // 페이지 요청할때 해당 페이지의 값을 구하는 로직
  $(`#js-pagination a`).removeClass('active')
  $(`#js-pagination a#page-${currentPage}`).addClass('active')

  $('#js-pagination a').click(function (e) {
    e.preventDefault()
    let $item = $(this)
    let $id = $item.attr('id')
    let selectedPage = $item.text()

    if ($id == 'next') selectedPage = next
    if ($id == 'prev') selectedPage = prev
    if ($id == 'allprev') selectedPage = 1
    if ($id == 'allnext') selectedPage = totalPage

    list.renderPagination(selectedPage) //페이지네이션 그리는 함수
    list.search(selectedPage) //페이지 그리는 함수
  })
}
