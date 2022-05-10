let clicked = function () {
  // 주소 불러오기
  let addLoad = document.getElementById("address").value;
  // 주소 이름 불러오기
  let nameLoad = document.getElementById("addName").value;
  // 변수 참조해서 a 태그 만들기

  if (addLoad.startsWith("https://") != true) {
    alert("https:// 로 시작하는 올바른 주소를 입력하세요.");
  } else {
    alert("성공적으로 바로가기가 만들어졌습니다.");
    let addResult = `<br><a href="` + addLoad + `" target="_blank">` + nameLoad + ` 바로가기 </a><br><br>`;
    let inputAdd = document.getElementById("addarr").innerHTML += addResult;
  }
};