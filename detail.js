

//팝업(모달)관련내용
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function openPopup(topic) {
  var modalTitle = document.getElementById("modalTitle");
  var modalContent = document.getElementById("modalContent");

  // topic에 따라 모달 창의 제목과 내용을 설정
  if (topic === "Java") {
    modalTitle.innerHTML = "Java";
    const content = `
<p>『 Java를 사용하여 웹개발을 해본 경험이 있습니다.』</p>

<p>▶ 개발 문서를 참고하여 <strong>Restful API</strong>를 개발할 수 있으며, 협업 경험이 있습니다.</p>

<p>▶ <strong>오픈소스 API</strong>를 사용해본 경험이 있습니다. → 구글 OCI 광학 문자 인식 API / KAKAO DEV / TWITTER X V2 등 다양한 오픈소스를 경험해보았습니다.</p>

<p>▶ 람다식과 함수형 인터페이스, 스트림 API, Optional 클래스 등 JAVA 8버전 이후의 기능 사용이 가능합니다.</p>
`;
    modalContent.innerHTML =content;
    } else if (topic === "DB 설계서") {
    modalTitle.innerHTML = "DB 설계서";
    const content = `
<p>『기획자 분들과의 원활한 소통을 위해 DB를 쉽게 풀어 설명했습니다.』</p>

<p>▶ 각 DB명칭과, 그 역할을 <strong>직관적</strong>으로 설명했습니다.</p>

<p>▶ PK와 FK역시 따로 표기했습니다. <strong>( 개발자도 유용하게 사용할 수 있습니다. )</strong></p>

<p>▶ NULL여부와 EXTRA 타입, 데이터 타입, 데이터 크기 역시 보기 쉽게 정리했습니다.</p>
`;
    modalContent.innerHTML =content;
  } else if (topic === "swagger") {
    modalTitle.innerHTML = "Swagger";
    const content = `
<p>『프론트와의 협업을 위해 api 명세를 Swagger로 관리했습니다.』</p>

<p>▶ 각 오류코드 별, 반응사항을 정리했습니다.</p>

<p>▶ Spring자체 어노테이션을 이용하여 쉽게 관리했습니다. <strong>(@Tag / @Operation / @Parameter)</strong></p>

<p>▶ swagger에서 제공해주는 Try it out과 Execute를 이용하여 백엔드단 검증을 완료하였습니다. </p>
`;
    modalContent.innerHTML =content;
  } else if (topic === "DB 스키마") {
    modalTitle.innerHTML = "DB 스키마";
    const content = `
<p>『Mysql을 JPA를 이용하여 다룰 수 있습니다.』</p>

<p>▶ Mysql의 <strong>데이터 타입 및 sql문을</strong>를 이해하고 있습니다. </p>

<p>▶ <strong>JPA에 맞는</strong>테이블을 설계할 수 있습니다. 다대다(N:N)관계를 풀어내기 위해 중간테이블을 이용합니다.</p>

<p>▶ 좋아요, 검색, 게시판을 포함한 기본 기능과 더불어, 계층형 구조를 사용할 수 있습니다.</p>
`;
    modalContent.innerHTML =content;
  } else if (topic === "Python") {
    modalTitle.innerHTML = "Python";
    modalContent.innerHTML = "Python 관련 내용을 여기에 작성합니다.";
  } else if (topic === "JSP/Servlet") {
    modalTitle.innerHTML = "JSP/Servlet";
    modalContent.innerHTML = "JSP/Servlet 관련 내용을 여기에 작성합니다.";
  }
  // 나머지 버튼들에 대한 처리도 동일하게 추가

  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
