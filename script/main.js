AOS.init();

document.addEventListener('DOMContentLoaded', () => {
  

  // 자주 사용되는 선택자들
  const menu = document.querySelector('.menu')
  const spans = document.querySelectorAll('header span')
  const menulist = document.querySelector('#mo_menu .menulist ul')
  const header = document.querySelector('header')


  // <모바일_메뉴>
  function toggleMenu() {

    // 메뉴 3선 > X로 됨
    spans.forEach((open) => {
      open.classList.toggle('open')
    });

    // 모바일 ul에 높이 부여
    menulist.classList.toggle('show');

  };
  // => 모바일 menu눌렀을때만, toggleMenu함수실행
  menu.addEventListener('click', toggleMenu);



  // 스크롤
  // <헤더 색변화>
  function change() {
    const main = document.querySelector('main')
    const web = document.querySelector('.web')
    const menuWrap = document.querySelector('.menuWrap')

    // 요소들의 현재 위치를 가져옴
    const mainPosition = main.getBoundingClientRect();
    const webPosition = web.getBoundingClientRect();


    // 1. web섹션에서만 색변화 ; 헤더 높이값:80px &&:논리곱연산자
    if (webPosition.top <= 80 && webPosition.bottom >= 80) {
      header.classList.add('bg_b');
      menuWrap.classList.add('color_w');
      spans.forEach((span) => {
        span.style.backgroundColor = '#fff';
      });
    } else {
      header.classList.remove('bg_b');
      menuWrap.classList.remove('color_w');

      spans.forEach((span) => {
        span.style.backgroundColor = '#121212';

      });
    }

    // 2. 메인에만 헤더 배경색 없음
    if (mainPosition.top <= 80 && mainPosition.bottom >= 80) {
      header.classList.remove('bg_w');
    } else {
      header.classList.add('bg_w');
    }

    // console.log('mainPosition:', mainPosition);
    // console.log('webPosition:', webPosition);

  };



  // <스크롤시 header 숨김>
  let prevScrollTop = 0; // 전역 변수로 선언

  function active() {
    const nowScrollTop = window.scrollY; // 현재 스크롤 위치를 nowScrollTop에 저장

    if (nowScrollTop > prevScrollTop) {
      //1. 아래로 스크롤시 헤더 숨김
      header.classList.add('active'); // 스크롤 방향(Down) 내릴 때 -> 헤더에 active 클래스 추가

         // 아래꺼 적용해야 메뉴아이콘 클릭후 스크롤시, 메뉴들도 같이 사라짐
      menulist.classList.remove('show'); // menulist를 슬라이드 업 상태로
      spans.forEach((span) => {
        span.classList.remove('open'); // 스크롤 내릴 때 'open' 클래스 제거
      });

    } else {
      // 2. 위로 스크롤시 헤더 보임
      header.classList.remove('active'); // 스크롤 방향(Up) 올릴 때 -> 헤더에 active 클래스 제거

    }

    prevScrollTop = nowScrollTop; // 현재 스크롤 값을 prevScrollTop에 저장
  }



  // => active, change함수 실행
  window.addEventListener('scroll', function () {
    active();
    change();
  });

});


// 제이쿼리
$(function () {

  // top_btn
  $(window).scroll(function () {

    let top = $(window).scrollTop();

    if (top >= 1500) {
      $('.btn_bg').stop(true).fadeIn(300);
    } else {

      $('.btn_bg').stop(true).fadeOut(300);
    }


    $('.btn_bg').click(function () {

      $(window).scrollTop(0);

    });


  });

});