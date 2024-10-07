// $(function(){
//   $('.menu').click(function(){
//     $(this).find('span').toggleClass('open');

//   });

// });

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


  // document.addEventListener('DOMContentLoaded', () => {
  //   // 자주 사용되는 선택자들
  //   const menu = document.querySelector('.menu');
  //   const spans = document.querySelectorAll('header span');
  //   const menulist = document.querySelector('#mo_menu .menulist ul');
  //   const header = document.querySelector('header');
  //   let prevScrollTop = 0; // 전역 변수로 선언

  //   // <모바일_메뉴 토글 함수>
  //   function toggleMenu() {
  //     spans.forEach((span) => {
  //       span.classList.toggle('open'); // span에 'open' 클래스 토글
  //     });
  //     menulist.classList.toggle('show'); // menulist의 'show' 클래스 토글
  //   }

  //   menu.addEventListener('click', toggleMenu);

  //   // <헤더 색변화>
  //   function change() {
  //     const main = document.querySelector('main');
  //     const web = document.getElementById('web');

  //     // 요소들의 현재 위치를 가져옴
  //     const mainPosition = main.getBoundingClientRect();
  //     const webPosition = web.getBoundingClientRect();

  //     // web섹션에서만 색변화
  //     if (webPosition.top <= 80 && webPosition.bottom >= 80) {
  //       header.classList.add('bg_b');
  //       spans.forEach((span) => {
  //         span.style.backgroundColor = '#fff';
  //       });
  //     } else {
  //       header.classList.remove('bg_b');
  //       spans.forEach((span) => {
  //         span.style.backgroundColor = '#121212';
  //       });
  //     }

  //     // 메인에만 헤더 배경색 없음
  //     if (mainPosition.top <= 80 && mainPosition.bottom >= 80) {
  //       header.classList.remove('bg_w');
  //     } else {
  //       header.classList.add('bg_w');
  //     }
  //   }

  //   // <헤더 스크롤시 숨김, 보임>
  //   function active() {
  //     const nowScrollTop = window.scrollY; // 현재 스크롤 위치를 nowScrollTop에 저장

  //     if (nowScrollTop > prevScrollTop) {
  //       header.classList.add('active'); // 스크롤 방향(Down) 내릴 때 -> 헤더 숨김
  //       menulist.classList.remove('show'); // menulist를 슬라이드 업 상태로
  //     } else {
  //       header.classList.remove('active'); // 스크롤 방향(Up) 올릴 때 -> 헤더 보임
  //     }

  //     prevScrollTop = nowScrollTop; // 현재 스크롤 값을 prevScrollTop에 저장
  //   }

  //   window.addEventListener('scroll', () => {
  //     active();
  //     change();
  //   });
  // });

// document.addEventListener('DOMContentLoaded', () => {
  
//   const menu = document.querySelector('.menu');
//   const spans = document.querySelectorAll('header span');
//   const menulist = document.querySelector('#mo_menu nav ul');
//   const header = document.querySelector('header');
//   let prevScrollTop = 0; // 전역 변수로 선언


//   // <모바일 메뉴 토글 함수>
//   function toggleMenu() {
//     spans.forEach((open) => {
//       open.classList.toggle('open');
//     });
//     menulist.classList.toggle('slidedown');
//   }

//   // <헤더 색상 변화 함수>
//   function change() {
//     const main = document.querySelector('main');
//     const web = document.getElementById('web');
    
//     // 1.요소들의 현재 위치를 가져옴
//     const mainPosition = main.getBoundingClientRect();
//     const webPosition = web.getBoundingClientRect();

//     // 2.web섹션에서 색 변화
//     if (webPosition.top <= 80 && webPosition.bottom >= 80) {
//       header.classList.add('bg_b');
//       spans.forEach((span) => {
//         span.style.backgroundColor = '#fff';
//       });
//     } else {
//       header.classList.remove('bg_b');
//       spans.forEach((span) => {
//         span.style.backgroundColor = '#121212';
//       });
//     }

//     // 3.메인에만 헤더 배경색 없음
//     if (mainPosition.top <= 80 && mainPosition.bottom >= 80) {
//       header.classList.remove('bg_w');
//     } else {
//       header.classList.add('bg_w');
//     }

//     // 4. 575px 이하일 때 header 배경을 transparent로 변경
//     checkScreenWidth();
//   }

//   // <스크롤에 따른 헤더 숨김/보임>
//   function active() {
//     const nowScrollTop = window.scrollY; // 현재 스크롤 위치를 nowScrollTop에 저장

//     if (nowScrollTop > prevScrollTop) {
//       header.classList.add('active'); // 스크롤 방향(Down) 내릴 때 -> 헤더에 active 클래스 추가
//     } else {
//       header.classList.remove('active'); // 스크롤 방향(Up) 올릴 때 -> 헤더에 active 클래스 제거
//     }

//     prevScrollTop = nowScrollTop; // 현재 스크롤 값을 prevScrollTop에 저장
//   }

//   // 575px 이하일 때 header 배경을 transparent로 변경
//   function checkScreenWidth() {
//     if (window.innerWidth <= 575) {
//       header.style.backgroundColor = 'transparent'; // 배경 투명하게 설정
//     } else {
//       header.style.backgroundColor = ''; // 원래 배경색 복원 (기본 설정)
//     }
//   }

//   // 이벤트 리스너 추가
//   menu.addEventListener('click', toggleMenu);
//   window.addEventListener('scroll', () => {
//     active();
//     change();
//   });

//   // 초기 로드 시 확인
//   checkScreenWidth();
//   // 화면 크기 변경 시 이벤트 감지
//   window.addEventListener('resize', checkScreenWidth);
// });