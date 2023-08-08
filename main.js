//헤더-토글
let open=document.querySelector('#open'); 
let openNav=document.querySelector('#openNav'); 
let close=document.querySelector('.openNav_close'); 
let header=document.querySelector('#header');



open.addEventListener('click',() => {
  openNav.classList.add('show');
  header.style.display="none"
})
close.addEventListener('click',() => {
  openNav.classList.remove('show');
   header.style.display="block"
});

window.addEventListener("scroll", function (e) {
  let header = document.querySelector("header");
  header.classList.toggle("scrollEffect", window.scrollY > 0);
});





//MAINBANNER-SLIDER--SLICK
$(document).ready(function () {
  $('.banner-slider').slick({
    dots: true,
    autoPlay: true,
    arrows: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      }, {
        breakpoint: 1290,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }, {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 767,
        // settings: "unslick" // destroys slick
        slidesToShow: 1,
        dots: true
      }
    ]
  });
});


// images setup
const images = [
  "./img/w1.webp",
  "./img/w1_p2.webp",
  "./img/w3.jpeg",
];

// content setup
const texts = [
  ["NEW BAG", "ONLINE‎:‎EXCLUSIVE"],
  ["BLUE WAVES", "2023‎:‎DISRUPTIVE LUXURY"],
  ["SS21 GLOVES", "2023‎:‎GOLF HATES ME"],
]

rgbKineticSlider = new rgbKineticSlider({

  slideImages: images, // array of images > must be 1920 x 1080
  itemsTitles: texts, // array of titles / subtitles

  backgroundDisplacementSprite: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2081&q=80', // slide displacement image 
  cursorDisplacementSprite: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2081&q=80', // cursor displacement image

  cursorImgEffect : true, // enable cursor effect
  cursorTextEffect : false, // enable cursor text effect
  cursorScaleIntensity : 0.65, // cursor effect intensity
  cursorMomentum : 0.14, // lower is slower

  swipe: true, // enable swipe
  swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
  swipeScaleIntensity: 2, // scale intensity during swipping

  slideTransitionDuration : 1, // transition duration
  transitionScaleIntensity : 30, // scale intensity during transition
  transitionScaleAmplitude : 160, // scale amplitude during transition

  nav: true, // enable navigation
  navElement: '.main-nav', // set nav class

  imagesRgbEffect : false, // enable img rgb effect
  imagesRgbIntensity : 0.9, // set img rgb intensity
  navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 

  textsDisplay : true, // show title
  textsSubTitleDisplay : true, // show subtitles
  textsTiltEffect : true, // enable text tilt
  googleFonts : ['Playfair Display:700', 'Roboto:400'], // select google font to use
  buttonMode : false, // enable button mode for title
  textsRgbEffect : true, // enable text rgb effect
  textsRgbIntensity : 0.03, // set text rgb intensity
  navTextsRgbIntensity : 15, // set text rgb intensity for regular nav

  textTitleColor : 'white', // title color
  textTitleSize : 60, // title size
  mobileTextTitleSize : 160, // title size
  textTitleLetterspacing : 3, // title letterspacing

  textSubTitleColor : 'white', // subtitle color ex : 0x000000
  textSubTitleSize : 16, // subtitle size
  mobileTextSubTitleSize : 16, // mobile subtitle size
  textSubTitleLetterspacing : 2, // subtitle letter spacing
  textSubTitleOffsetTop : 70, // subtitle offset top
  mobileTextSubTitleOffsetTop : 70, // mobile subtitle offset top
});







//WHAT'S NOW 
window.addEventListener('mousemove', function (e) {
  document.querySelector('#slidephoto').style.top = `${e.clientY}px`
  document.querySelector('#slidephoto').style.left = `${e.clientX}px`
  document.querySelector('#slidephoto').style.transform = `translate(${e.clientX }px, ${e.clientY}px,)`
})
//routine
document.querySelector('#routine').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto_wrap').style.marginTop = "0%"
  document.querySelector('#routine').style.color = "rgba(177,177,177)"
})
document.querySelector('#routine').addEventListener('mouseleave', function () {
  document.querySelector('#routine').style.color = "initial"
})
//rain
document.querySelector('#rain').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto_wrap').style.marginTop = "-120%"
  document.querySelector('#rain').style.color = "rgba(177,177,177)"
})
document.querySelector('#rain').addEventListener('mouseleave', function () {
  document.querySelector('#rain').style.color = "initial"
})
//player
document.querySelector('#player').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto_wrap').style.marginTop = "-240%"
  document.querySelector('#player').style.color = "rgba(177,177,177)"
})
document.querySelector('#player').addEventListener('mouseleave', function () {
  document.querySelector('#player').style.color = "initial"
})
//neo
document.querySelector('#neo').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto_wrap').style.marginTop = "-360%"
  document.querySelector('#neo').style.color = "rgba(177,177,177)"
})
document.querySelector('#neo').addEventListener('mouseleave', function () {
  document.querySelector('#neo').style.color = "initial"
})
//summer
document.querySelector('#summer').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto_wrap').style.marginTop = "-480%"
  document.querySelector('#summer').style.color = "rgba(177,177,177)"
})
document.querySelector('#summer').addEventListener('mouseleave', function () {
  document.querySelector('#summer').style.color = "initial"
})

document.querySelector('#gfore_now__archive').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto').style.display = "initial";
  document.querySelector('#slidephoto').style.opacity = "1";
})
document.querySelector('#gfore_now__archive').addEventListener('mouseleave', function () {
  document.querySelector('#slidephoto').style.display = "none";
  document.querySelector('#slidephoto').style.opacity = "0";
})







//탭메뉴
function openTab(evt, tabName) {
  // 모든 탭 내용 숨김
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // 모든 탭 버튼 비활성화
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // 선택한 탭 내용 표시 및 버튼 활성화
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  $('.tabSlick').slick('setPosition');
}

// 기본 탭 설정 (예: 탭 1 선택)
document.getElementById("Tab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";


//탭메뉴-슬릭
$(document).ready(function () {
  $('.tabSlick').slick({
    autoPlay: true,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1290,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }

    ]
  });
});



/* sticky */

let scrollBody = document.querySelector('.fix_motion');
let scrollHeight; // 스크롤의 높이
let sectionOffsetTop; // sticky가 시작되기 전 섹션의 높이 (.fix_motion이 천장에 닿을 때)
let sectionScrollTop;
let scrollRealHeight; // 실제로 스크롤해야 할 높이
let winScrollTop; // 스크롤바의 높이를 담을 변수
let scrollPercent; // 스크롤 백분율값
let persent;

let isMobile;

function scrollFuc() {
    isMobile = window.innerWidth <= 1024 ? true : false;
    setProperty();
    if (isMobile) {
        contentInMobile();
    } else {
        contentIn();
    }
}


function setProperty() {
    isMobile = window.innerWidth <= 1024 ? true : false;
    scrollHeight = scrollBody.offsetHeight; // .fix_motion의 높이값
    sectionOffsetTop = scrollBody.offsetTop; // 문서에서 .fix_motion 전 섹션까지의 높이 값
    scrollRealHeight = scrollHeight - window.innerHeight; // 실제로 스크롤 해야할 높이값
    winScrollTop = pageYOffset;
    sectionScrollTop = winScrollTop - sectionOffsetTop; // 내 영역안에 스크롤이 얼마나 내려왔는지 계산
    scrollPercent = sectionScrollTop / scrollRealHeight;
    console.log(persent)
    persent = scrollPercent * 100;

    contentIn();

}

function contentIn() {
    let deviceImg = document.querySelectorAll('.slide figure');
    let imgWidth = deviceImg[0].offsetWidth; // 이미지 하나의 넓이값


    if (persent >= 12 && persent < 37) {
        document.querySelector('.text_box p.text01').classList.add('active')
        imgChange(imgWidth * 0) // 원래 자리 그대로
    }
    if (persent >= 37 && persent < 65) {
        document.querySelector('.text_box p.text02').classList.add('active')
        imgChange(imgWidth * 1)

    }
    if (persent >= 65 && persent < 86) {
        document.querySelector('.text_box p.text03').classList.add('active')
        imgChange(imgWidth * 2)
    }
    if (persent >= 86) {
        document.querySelector('.text_box p.text04').classList.add('active')
        imgChange(imgWidth * 3)
    }

    if (persent < 12) {
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
    }
}

function contentInMobile() {
    let deviceImg = document.querySelectorAll('.slide figure');
    let imgWidth = deviceImg[0].offsetWidth; // 이미지 하나의 넓이값


    if (persent >= 12 && persent < 37) {
        document.querySelector('.text_box p.text01').classList.add('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imgChange(imgWidth * 0) // 원래 자리 그대로
    }
    if (persent >= 37 && persent < 65) {
        document.querySelector('.text_box p.text02').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imgChange(imgWidth * 1)

    }
    if (persent >= 65 && persent < 86) {
        document.querySelector('.text_box p.text03').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        imgChange(imgWidth * 2)
    }
    if (persent >= 86) {
        document.querySelector('.text_box p.text04').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        imgChange(imgWidth * 3)
    }

    if (persent < 12) {
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
    }
}

function imgChange(moveX) {
    let img = document.querySelector('.slide_wrap .slide');
    img.style.transform = `translateX(${-moveX}px)`
}

window.addEventListener('scroll', function () {
    setProperty();
})







//background- mousemove--fullbg
let docwidth = window.innerWidth; //화면의 넓이값
let wrap = document.querySelector('.newspaperWrap');
let imgs = document.querySelectorAll('.newspaperWrap .hb');
let slideWidth = wrap.clientWidth; //wrap의 넚이값

wrap.addEventListener('mousemove', function (e) {
  let mouseX = e.clientX;
  console.log(mouseX)
  let offset = (mouseX / docwidth) * slideWidth - mouseX / 2;

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = `translateX(${-offset}px)`;
  }
})

wrap.addEventListener('mouseleave', function () {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = `translateX(0px)`;
    imgs[i].style.transition = '0.5s';
  }
})


//파노라마
let panoWrap = document.querySelector('.sj_panorama .pano_wrap');
let listWrap = panoWrap.querySelector('.list'); //ul
let item = listWrap.children
//console.log(item);
let listClone = null;
let itemWidth = item[0].offsetWidth; //이미지하나의넓이
let itemLength = item.length; // 10개
let listWidth = itemWidth * itemLength; //300*10=3000px (이미지하나넚이 * 개수 )
let move = 0;
//let controls=document.querySelector('.sj_panorama .controls');
let controls = panoWrap.parentElement.querySelector('.controls');
let timer;

// function init(){}
// let init=()=>{}
let init = function () {
  panoWrap.style.width = listWidth * 2 + "px";
  listWrap.style.width = listWidth + "px";
  panoWrap.appendChild(listWrap.cloneNode(true)) //listWrap을 복사(자식까지 포함복사)
  listClone = panoWrap.children
  //console.log(listClone)
  render();
  add();
  event();
}
let render = function () {
  move += 1;
  //유사배열을 배열로 바꿈
  //console.log(Array.from(listClone))
  Array.from(listClone).forEach(function (clone) {
    clone.style.transform = `translateX(${-move}px)`
  })
  timer = window.requestAnimationFrame(render)
}

let add = function () {
  setInterval(function () {
    panoWrap.appendChild(listWrap.cloneNode(true));
    listClone = panoWrap.children;
  }, 10000);
}

let event = function () {
  controls.querySelector('.play_on').addEventListener('click', function (e) {
    e.preventDefault();
    //console.log(this)
    if (this.classList.contains('active')) {
      this.classList.remove('active')
      window.cancelAnimationFrame(timer)
    } else {
      this.classList.add('active')
      render();
    }
  })
}


/* -----SCROLL REVEAL(이미지 애니메이션)----- */
ScrollReveal().reveal(' .right_img, .column ', {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

ScrollReveal().reveal('.right_img,.column ', {
  interval: 100
});
ScrollReveal().reveal('.item', {
  origin: 'left',
  interval: 100
});
ScrollReveal().reveal('.item', {
  origin: 'right',
  interval: 100
});



new TypeIt("#h2tit", {
  speed: 100,
  loop: false,//true,
  waitUntilVisible: true,

})
.move(-1, { delay: 100 })
.delete(1)
  .type("O", { delay: 400 })


  .move(null, { to: "end", instant: true, delay: 300 })
  .move(1, { delay: 200 })

.go();


/* -----PRE_LOADING(preload.js)----- */
window.addEventListener('load', function () {
  init()
})