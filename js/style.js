// header bottom_header---------------------
// main_Menu => 제일 큰 메뉴
let main_Menu = document.querySelectorAll(".main_Menu");
// 아래로 열릴 메뉴
let drop_down = document.querySelectorAll(".drop_down");
// data-target 할당할 변수
let data;

main_Menu.forEach(title=>{
  // 제일 큰 메뉴에 마우스 가져다대면 열기
  title.addEventListener("mouseenter", ()=>{
    // 현재 선택한 메뉴의 data-target을 변수에 할당
    data = document.getElementById(title.dataset.target);

    // 아래로 열릴 메뉴들 페이지 반복문 돌림
    drop_down.forEach(sub => {
      // 일단 전부 클래스 지우면서 초기화
      sub.classList.remove("active");
      // data-target이랑 현재 지금 메뉴랑 같으면 클래스 할당
      if(data.id == sub.id){
        sub.classList.add("active");
      }
    })
  })
})
  // 제일 큰 메뉴에 마우스 가져다대면 끄기
main_Menu.forEach(title=>{
  // 마우스를가 메뉴위에 없으면
  title.addEventListener("mouseleave", ()=>{
    // 모든 메뉴 클래스 삭제해서 초기화
    drop_down.forEach(sub=>{
      sub.classList.remove("active");
    })
  })
})
  // 드롭다운 메뉴에 마우스 있거나 떠나면 설정
drop_down.forEach(sub=>{
  // 마우스가 있으면
  sub.addEventListener("mouseenter", () =>{
    // 현재 마우스가 있는 메뉴는 계속 켜진상태
    sub.classList.remove("active");
    if(data.id == sub.id){
      sub.classList.add("active");
    }
  })
  // 마우스가 떠나면 모든 메뉴 닫기
  sub.addEventListener("mouseleave",()=>{
    sub.classList.remove("active");
  })
})

let title_menus = document.querySelectorAll(".drop_down .contents")
title_menus.forEach(title=>{
  title.addEventListener("mouseenter", ()=>{
    title.parentElement.querySelector(".title").classList.add("active");
  })
})
title_menus.forEach(title=>{
  title.addEventListener("mouseleave", ()=>{
    title.parentElement.querySelector(".title").classList.remove("active");
  })
})
//---------------------------------------------

// news ---------------------------------------
// 뉴스 탭 버튼
let news_btn = document.querySelectorAll(".news_pc li .news_btn");
// 뉴스 탭
let news_tab = document.querySelectorAll(".news_pc .info_tab_box");

let news_btn_m = document.querySelectorAll(".news_mob li .news_btn");
// 모바일 뉴스 탭
let news_tab_m = document.querySelectorAll(".news_mob .info_tab_box");

news_btn.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    for(let i = 0; i < news_tab_m.length; i++){
      news_btn_m[i].classList.remove("active");
      news_btn[i].classList.remove("active");
    }
    btn.classList.add("active");
    news_btn_m[index].classList.add("active");
    view_open(index, news_tab);
  })
})
news_btn_m.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    for(let i = 0; i < news_tab_m.length; i++){
      news_btn_m[i].classList.remove("active");
      news_btn[i].classList.remove("active");
    }
    btn.classList.add("active");
    news_btn[index].classList.add("active");
    view_open(index, news_tab_m);
  })
})
// 선택한 버튼에 맞는 탭 켜주기
function view_open(num, tabs){
  console.log(num);
  for(let i = 0; i < news_tab_m.length; i++){
    news_tab_m[i].classList.remove("active");
    news_tab[i].classList.remove("active");
  }

  news_tab_m[num].classList.add("active");
  news_tab[num].classList.add("active");
  console.log(tabs[num]);
}
// footer
let btn_f = document.querySelectorAll(".list_open");
btn_f.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(btn.classList.contains("active")){
      btn.classList.remove("active")
    }
    else{
      for(let a of btn_f){
        a.classList.remove("active");
      }
      btn.classList.add("active");
    }
  })
})
// sns_btn
let sns_btn = document.querySelector(".sns_wrap > a");
sns_btn.addEventListener("click", ()=>{
  sns_btn.classList.toggle("active");
})
// 모바일 네비게이션
// 모바일 네비게이션 뷰
let view_Btns_moblie = document.querySelectorAll(".view.moblie_view");
// 햄버거 버튼
let moblie_nav = document.querySelector(".moblie_nav");
// 오른쪽에 표시해줄 뷰
let right_nav_wrap = document.querySelectorAll(".right_nav_list");
// 왼쪽 메뉴 버튼
let left_title_wrap_buttons = document.querySelectorAll(".left_title_wrap ul > li> button");
// 햄버거 버튼 on off
view_Btns_moblie.forEach(view_btn =>{
  view_btn.addEventListener("click",()=>{
    moblie_nav.classList.toggle("active");
  })
})
// 왼쪽 메뉴 클릭시 그에 맞는 ul표시
left_title_wrap_buttons.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    left_title_wrap_buttons.forEach(btn2=>{
      btn2.classList.remove("active");
    })
    btn.classList.add("active");
    open_right_view(index);
  })
})

function open_right_view(num){
  right_nav_wrap.forEach(wrap=>{
    wrap.classList.remove("active");
  })
  right_nav_wrap[num].classList.add("active");
}
// 소메뉴 버튼
let nav_sub_title = document.querySelectorAll("button.nav_sub_title");
//소메뉴에 대응하는 리스트
let moblie_sub_list = document.querySelectorAll(".moblie_sub_list");

nav_sub_title.forEach((btn, index)=>{
  btn.addEventListener("click",()=>{
    // 이미 켜진 버튼을 또 눌렀을때
    if(btn.classList.contains("active")){
      btn.classList.remove("active");
      moblie_sub_list[index].classList.remove("active");
    }
    // 다른 버튼 눌렀을때
    else{
      for(let i = 0; i < nav_sub_title.length; i++){
        nav_sub_title[i].classList.remove("active");
        moblie_sub_list[i].classList.remove("active");
      }
      btn.classList.add("active");
      moblie_sub_list[index].classList.add("active");
    }
  })
})
// 메인비주얼 swiper---------------------------
var swiper = new Swiper(".mySwiper01", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,   
  autoplay: true,
  slidesPerView : 1,
});
// quick swiper-------------------------------
var swiper = new Swiper(".mySwiper02", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView : 3,
  breakpoints: {
    // 768px 이상일때 5개
    768: {
      slidesPerView: 5
    }
  }
});
// news swiper--------------------------------
var swiper = new Swiper(".mySwiper03", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper04", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper05", {
  slidesPerView: 3,
  centeredSlides: true,  
  loop: true,   
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 400,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 30,          // 슬라이드 간 간격
    }
  }
});
// 
var swiper = new Swiper(".mySwiper06", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView : 1,
  breakpoints: {
    // 768px 이상일때 3개
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  }
});
var swiper = new Swiper(".mySwiper07", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, 
  autoplay: true,
  slidesPerView : 3,
  spaceBetween: 10,
  breakpoints: {
    // 768px 이상일때 3개
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});