AOS.init();

document.addEventListener('DOMContentLoaded', () => {

  // 자주 사용되는 선택자들
  const menu = document.querySelector('.menu')
  const spans = document.querySelectorAll('header span')
  const menulist = document.querySelector('#mo_menu .menulist ul')
  const header = document.querySelector('header')


  // <모바일_메뉴>
  function toggleMenu() {

    spans.forEach((open) => {
      open.classList.toggle('open')
    });

    menulist.classList.toggle('show');
    // menulist.classList.toggle('slidedown');

  }

  menu.addEventListener('click', toggleMenu);



  // <헤더 색변화>
  function change() {
    const main = document.querySelector('main')
    const web = document.querySelector('.web')
    const menuWrap = document.querySelector('.menuWrap')

    // 요소들의 현재 위치를 가져옴
    const mainPosition = main.getBoundingClientRect();
    const webPosition = web.getBoundingClientRect();


    // web섹션에서만 색변화
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

    // 메인에만 헤더 배경색 없음
    if (mainPosition.top <= 80 && mainPosition.bottom >= 80) {
      header.classList.remove('bg_w');
    } else {
      header.classList.add('bg_w');
    }

    console.log('mainPosition:', mainPosition);
    console.log('webPosition:', webPosition);

  };



  //  header 스크롤시 숨김, 보임
  let prevScrollTop = 0; // 전역 변수로 선언
  function active() {
    const nowScrollTop = window.scrollY; // 현재 스크롤 위치를 nowScrollTop에 저장

    if (nowScrollTop > prevScrollTop) {
      header.classList.add('active'); // 스크롤 방향(Down) 내릴 때 -> 헤더에 active 클래스 추가

      menulist.classList.remove('show'); // menulist를 슬라이드 업 상태로
      spans.forEach((span) => {
        span.classList.remove('open'); // 스크롤 내릴 때 'open' 클래스 제거
      });
    } else {
      header.classList.remove('active'); // 스크롤 방향(Up) 올릴 때 -> 헤더에 active 클래스 제거

    }

    prevScrollTop = nowScrollTop; // 현재 스크롤 값을 prevScrollTop에 저장
  }




  window.addEventListener('scroll', function () {
    active();
    change();
  });

});



$(function(){

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