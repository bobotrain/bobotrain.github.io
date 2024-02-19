
//전역변수 설정
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var modalImg = document.querySelector('#img01');


//모달 내용 관련
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
  } else if (topic === "Swagger") {
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
    const content = `
<p>『Phython을 사용하여 쇼핑몰 자동화 서비스를 개발했습니다.』</p>

<p>▶ phython의 <strong>Selenium</strong>을 응용하여 쇼핑몰 판매자들을 위한 통합관리서비스를 개발했습니다.</p>

<p>▶ <strong>multi thread구조</strong>를 도입하여 각 모듈별 기능성을 높혔습니다.</p>

<p>▶ NSIS를 사용하여 Setup구조를 만들고 <strong>배포</strong>하였습니다. </p>
`;
    modalContent.innerHTML =content;
  } else if (topic === "Xplatform/Nexacro") {
    modalTitle.innerHTML = "Xplatform/Nexacro";
    const content = `
<p>『X-platform과 Nexacro를 사용하여 화면개발을 할 수 있습니다.』</p>

<p>▶ 해당 프론트 프레임워크를 사용하여 보험사 에이전시(GA제휴사)를 위한 ERP시스템을 구축해본 경험이 있습니다.</p>

<p>▶ UbiDesigner와 같은 ‘출력’만을 위한 프린팅 프로그램을 자사 솔루션에 Mash-up해본 경험이 있습니다.</p>

<p>▶ 동적 데이터 출력이 가능합니다. 컴포넌트 구조에 대해 이해하고 있습니다.</p>
`;
    modalContent.innerHTML =content;
  }else if (topic === "codeimg") {
    modalTitle.innerHTML = "Write backend code";
    const content = `
<p>『Spring 프레임워크 + JPA + Mysql 연동을 통해 백엔드 코드를 작성했습니다.』</p>

<p>▶ DAO/Controller/Service/Repository로 구성되는 MVC패턴에 입각하여 코드를 작성했습니다.</p>

<p>▶ 재사용성의 고려를 위해 도메인 기반 레이어 구조를 채택했고, 객체화(BaseException 같은 공통 서식 분리)에 집중했습니다.</p>

<p>▶ 다이내믹 이미지 출력 및 효율적인 캐시 관리를 위한 REDIS도입, 트위터/카카오 API 도입 등 RESTAPI기반 협업을 진행했습니다. </p>

<p>▶ 서버 가용성 관리를 통해 서버가 터지는 오류 발견 -> DB서버와 실행서버의 분리 + 서버 스펙 t3.medium으로의 업그레이드를 통해 문제 해결 </p>
`;
    modalContent.innerHTML =content;
  }else if (topic === "AWS") {
    modalTitle.innerHTML = "AWS EC2+S3를 이용한 CI/CD 배포";
    const content = `
<p>『AWS EC2(백엔드)+ S3 버킷(프론트)+ DOCKER 컨테이너를 이용한 MYSQL DB/REDIS를 사용합니다.』</p>

<p>▶ 기본적인 고정IP 네트워크 구조를 이해하고 AWS EC2로 (우분투)백그라운드 실행을 할 수 있습니다. </p>

<p>▶ S3버킷을 활용한 정적 호스팅이 가능합니다(프론트 코드 배포).</p>

<p>▶ SSL(X-SHELL)및 FTP의 사용과 도커 컨테이너 구성, Jar 빌드 및 실행이 가능합니다.</p>
`;
    modalContent.innerHTML =content;
  }else if (topic === "JSP/Servlet") {
    modalTitle.innerHTML = "JSP/Servlet";
    const content = `
    <p>『Spring 프레임워크를 사용하지 않고 <strong>반응형 웹</strong>을 개발한 경험이 있습니다.』</p>

    <p>▶ SERVLET으로만 웹을 구현해 보며, 유지보수를 위한 객체화와 프레임워크의 필요성을 느꼈습니다.</p>
    
    <p>▶ <strong>싱글톤 방식과 MVC 모델 2 방식</strong>을 학습하고 프로젝트에 적용한 경험이 있습니다.</p>

    <p>▶ MODEL / VIEW에 해당하는 여러 JSP파일들 / Controller에 해당하는 DAO파일들의 역할과 상호작용을 이해했습니다.</p>
`;
    modalContent.innerHTML =content;
  }
  // 나머지 버튼들에 대한 처리도 동일하게 추가

  modal.style.display = "block";
}







//모달 이미지 관련
function openImg(topic) {
  var imgSrc;
   if (topic === "DB 스키마") {
   // 모달에 이미지 삽입
   imgSrc = "/img/DB스키마.png";
   }else if(topic === "DB 설계서") {
    imgSrc = "/img/DB설계서.png";
   }else if(topic === "swagger") {
    imgSrc = "/img/swagger.png";
   }else if(topic === "codeimg") {
    imgSrc = "/img/codeimg.jpg";
   }else if(topic === "AWS") {
    imgSrc = "/img/AWS.jpg";
   }


   modalImg .setAttribute('src', imgSrc);
   // 모달 보이기
   modal.style.display = 'block';
 }
 




 //모달 종료

span.onclick = function() {
  modal.style.display = "none";
  //모달 초기화
  modalTitle.textContent = "";
  modalContent.textContent = "";
  modalImg.setAttribute("src", "");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //모달 초기화
    modalTitle.textContent = "";
    modalContent.textContent = "";
    modalImg.setAttribute("src", "");
  }
}
