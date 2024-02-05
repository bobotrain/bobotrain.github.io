

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
    } else if (topic === "Python") {
    modalTitle.innerHTML = "Python";
    modalContent.innerHTML = "Python 관련 내용을 여기에 작성합니다.";
  } else if (topic === "JSP/Servlet") {
    modalTitle.innerHTML = "JSP/Servlet";
    modalContent.innerHTML = "JSP/Servlet 관련 내용을 여기에 작성합니다.";
  }
  // 나머지 버튼들에 대한 처리도 동일하게 추가

  modal.style.display = "block";

// topic에 따라 모달 창의 제목과 내용을 설정
  if (topic === "DB 스키마") {
    modalTitle.innerHTML = "Java";
    const content = `
<p>『 Java를 사용하여 웹개발을 해본 경험이 있습니다.』</p>

<p>▶ 개발 문서를 참고하여 <strong>Restful API</strong>를 개발할 수 있으며, 협업 경험이 있습니다.</p>

<p>▶ <strong>오픈소스 API</strong>를 사용해본 경험이 있습니다. → 구글 OCI 광학 문자 인식 API / KAKAO DEV / TWITTER X V2 등 다양한 오픈소스를 경험해보았습니다.</p>

<p>▶ 람다식과 함수형 인터페이스, 스트림 API, Optional 클래스 등 JAVA 8버전 이후의 기능 사용이 가능합니다.</p>
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
