// ------------- 스크롤 감지 애니메이션 ------------- //
// 먼저, 현재의 스크롤 위치를 퍼센트로 알아내기 위한 식 작성, 함수로 묶어 'getScrollPercentage라는 이름으로 선언해준다.
function getScrollPercentage(e){
    return(window.scrollY + window.innerHeight) / document.body.clientHeight * 100;
}

// 먼저 효과를 줄 섹션들을 변수로 불러와 선언해준다.

// section2
var Section2img = document.querySelector('#img'),  
    name1 = document.querySelector('#Moo'),
    name2 = document.querySelector('#na'),
    name3 = document.querySelector('#ssi');

    // 이벤트리스너를 이용하여 이벤트를 넣어준다.
    document.addEventListener("scroll", function(e){
        var ScrollPercentage = getScrollPercentage();
        // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
        if(ScrollPercentage >= 16){
            // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
            name1.classList.add('fadeIn');
        console.log(ScrollPercentage); // 현재의 스크롤 퍼센트를 알아보기 위한 콘솔 출력. 좋다.
        }
    })
       // 이벤트리스너를 이용하여 이벤트를 넣어준다.
       document.addEventListener("scroll", function(e){
        var ScrollPercentage = getScrollPercentage();
        // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
        if(ScrollPercentage >= 23){
            // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
            name2.classList.add('fadeIn');
        }
    })
        // 이벤트리스너를 이용하여 이벤트를 넣어준다.
        document.addEventListener("scroll", function(e){
        var ScrollPercentage = getScrollPercentage();
        // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
        if(ScrollPercentage >= 26){
            // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
            name3.classList.add('fadeIn');
            Section2img.classList.add('leftslice');
        }
    })
// section3
    var section3 = document.querySelector('#section3-wrap'),
    circle = section3.querySelector('#circle5'),
    h2 = section3.querySelector('#h2'),
    h5 = section3.querySelector('#h5'),
    Section3img = section3.querySelector('#img'),
    text = section3.querySelector('#text');

// 이벤트리스너를 이용하여 이벤트를 넣어준다.
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
    if(ScrollPercentage >= 36){
        // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
        Section3img.classList.add('fadeIn');
    }
})
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
    if(ScrollPercentage >= 40){
        // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
        h2.classList.add('fadeIn');
    }
})
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
    if(ScrollPercentage >= 41){
        // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
        text.classList.add('rightslice');
    }
})
// section4-------------(주석 이하 동문.)
var section4 = document.querySelector('.section4'),
    section4span = section4.querySelector('#span'),
    section4p = section4.querySelector('#p'),
    section4right = section4.querySelector('.right'),
    section4img = section4right.querySelector('#img'),
    section4h5 = section4right.querySelector('#h5');
    

document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 44){
        section4span.classList.add('downslice');
    }
})  
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 51){
        section4img.classList.add('fadeIn');
    }
}) 
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 55){
        section4p.classList.add('leftslice');
    }
})

// section5-------------(주석 이하 동문.)
var section5 = document.querySelector('.section5'),
    circle = section5.querySelector('#circle2'),
    x = section5.querySelector('#x'),
    span = section5.querySelector('#span'),
    img = section5.querySelector('#img'),
    p = section5.querySelector('#p');

document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 61){
        circle.classList.add('upslice');
    }
})
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 65){
        x.classList.add('fadeIn');
    }
})
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 67){
        span.classList.add('fadeIn');
    }
})
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 67){
        img.classList.add('fadeIn');
    }
})
document.addEventListener("scroll", function(e){
    var ScrollPercentage = getScrollPercentage();
    if(ScrollPercentage >= 69){
        p.classList.add('fadeIn');
    }
})

// section6-------------(주석 이하 동문.이지만 다시한번 달아본다.)
var section6 = document.querySelector('.section6'),
    gallery = section6.querySelector('#gallery');

// 도큐먼트에서 스크롤을 했을 때,
document.addEventListener("scroll", function(e){
    // 스크롤 페이지라는 변수에 현재 페이지 퍼센트 함수를 불러온다.
    var ScrollPercentage = getScrollPercentage();
    // 만약 스크롤 페이지가 82보가 크거나 같다면,
    if(ScrollPercentage >= 82){
        // 갤러리에 fadeIn클래스를 넣어주자.
        gallery.classList.add('fadeIn');
    }
})
// // 이벤트리스너를 이용하여 이벤트를 넣어준다.
//     document.addEventListener("scroll", function(e){
//         var ScrollPercentage = getScrollPercentage();
//         // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
//         if(ScrollPercentage >= 61){
//             // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
//             statement.classList.add('fadeIn');
//         console.log(ScrollPercentage); // 현재의 스크롤 퍼센트를 알아보기 위한 콘솔 출력. 좋다.
//         }
//     })
//  // 같은 방식으로 작성, else if를 사용하여 위 식에 이어 작성했더니 왜인지 오류가 뜨길래 따로 작성했더니 정상 작동된다!
//     document.addEventListener("scroll", function(e){
//         var ScrollPercentage = getScrollPercentage();
//         // 만약 스크롤의 퍼센트가 78보다 크거나 같다면,(대략 imgs들이 머리를 내미는 순간)
//         if(ScrollPercentage >= 78){
//             // imgs에 fadeIn을 넣어준다.
//             imgs.classList.add('fadeIn');
//         }
//     })





// ------------- section6 - 이미지 갤러리 ------------- //

// 변수들을 선언해준다. 필요한 값들을 할당해준다.
var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    listEl = gallery.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),


    _duration = 300, // 기본속도를 설정한다.
    _addDuration = 200, // 추가 속도 설정한다.

    _isAni = false, // _isAni라는 변수를 선언하고 false값을 준다.

    _galleryW = 800, // _galleryW에 800이라는 값을 넣어준다.
    _cuId = 0, // _cuId에 0을 넣어준다.
    _exId = null, //_exId에 null값을,
    _max = null; //_max에 null값을 준다.

// 블럭 단위로 기능 분리.

// 이벤트 핸들러 기능.
function onClickListItem(e){
    // e.preventDefault()를 사용해 추가로 이벤트를 상위로 전파하지 않고 막을 수 있다.
    e.preventDefault();
    // el에 e.currentTarget을 넣어주고,
    var el = e.currentTarget, 
    // parentEl에 el.parentElement(부모 엘리먼트)를 넣어준다.
    parentEl = el.parentElement, 
    // index변수에 btnListItemEls의 indexOf를 사용해 위치를 가져온다.
    index = btnListItemEls.indexOf(el);
    // _isAni가 true라면,
    if(_isAni){
        // 이 함수의 값을 return한다.
        return;
    }
    // parentEl이 selected 클래스를 포함하지 않는다면,(!를 사용해서 뒤집어줬다)
    if(!parentEl.classList.contains("selected")) {
        // 비활성화 되어있는 리스트만 선별해서.
        // _cuId의 값에 index를 넣어주고
        _cuId = index;
        // _exId의 위치에 있는(..번째의) listItemEls의 클래스 중 selected를 삭제하여 클래스 기능을 상실시킨다.
        listItemEls[_exId].classList.remove("selected");
        // _cuId번째의 listItemEls에 selected클래스를 추가해준다.
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        //실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
        // 현재의 값(_cuId)을 _exId에 넣어준다.
        _exId = _cuId;
        // 이 과정을 반복하며 작동.
    }
}
// onTransitionEnd라는 함수를 선언하고,
function onTransitionEnd(e){
    // _isAni가 false인 경우가 되면 그 때,
    _isAni = false;    
    // 애니메이션이 완료 후 버튼이 클릭 가능한 상태가 된다.
    viewContainerEl.style.removeProperty("transition");
    // removeProperty를 사용하여 viewContainerEl에 부여된 transition CSS 속성을 제거한다.


}

//--------
// 이미지 갤러리의 기능들.
// 이미지 갤러리의 사이즈를 새로 조정해준다.
function galleryResize(){
    // viewEl의 스타일 중 넓이를 _galleryWpx로 변경한다.(+"px"이 없는 경우 인식 못함.)
    viewEl.style.width = _galleryW + "px";
    // viewContainerEl의 넓이를 _galleryW와 _max가 곱해진 값으로 만들어준다.
    viewContainerEl.style.width = _galleryW * _max + "px";
    // i가 _max보다 작다면,
    for(var i = 0; i < _max; i++){
        // viewItemEls의 i번째의 넓이 스타일을 _galleryWpx값으로 변경한다.
        viewItemEls[i].style.width = _galleryW + "px";
    }
}
// 이미지를 슬라이드할 때 사용 될 함수를 선언한다.
function gallerySlide(){

    // 속도
    // console.log(_exId, _cuId, _cuId - _exId);
    // 만약에 0번째 (exId) 상태인 경우, 1번째를 클릭했을 때. 0-1 1만큼의 차이
    // 만약에 0번째 (exId) 상태인 경우, 3번째를 클릭했을 때. 0-3 3만큼의 갭이 발생 + 추가 시간을 더함
    
    // 3 -> 0 , 3만큼의 갭 발생, 
    // 절대값 - (얼마나 떨어져(갭의 차이가) 있는지찾기 위해서)
    // Math.abs(0 - 3); // -3 -> 3
    // Math.abs(3 - 0); // 3 -> -3

    // -----수업시간에 필기한 것, 참고

    // duration이라는 변수 안에 _duration과 _cuId - _exId의 절댓값(Math.abs를 사용해서 절댓값 반환함.) * _addDuration을 계산하여 넣어준다.
    var duration = _duration + Math.abs(_cuId - _exId)* _addDuration;
    // console.log(duration);
    // _isAni의 값을 true로 변경한다.
    _isAni = true;
    // 애니메이션이 되는 중에는 썸네일을 클릭해도 이동되지 않도록 막기 위한 Boolean 변수

    // viewContainerEl.style.left = _galleryW * _cuID + "PX";
    viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
    // viewContainerEl의 transform의 속성을 ms ease-in-out으로 둬서 더욱 부드럽게 샥 되도록 했다.
    viewContainerEl.style.transition = "transform " + duration + "ms ease-in-out"; 
    // -> css ease generator https://matthewlein.com/tools/ceaser
    // css 의 easing animation tool - 가속도 계산되어있는 링크
}

//--------
// 이벤트가 바인딩되는 기능들을
function addEvent() {
    // i라는 변수를 for문안에 만들어주고, i가 _max보다 작다면,
    for(var i = 0; i < _max; i++){
        // btnListItemEls의 i번째에 이벤트 클릭 핸들러를 할당해준다.(onClickListItem 함수 실행)
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    // 이 함수가 실행된다면, transitinend 이벤트 핸들러를 할당해준다.(onTransitionEnd 함수 실행)
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
}
//초기화 기능.
function init() {
    // _exId의 안에 _cuId값을 넣어주고,
    _exId = _cuId;
    // _max의 안에 viewItemEls의 길이를 넣어준다.
    _max = viewItemEls.length;
    // btnListItemEls는 배열을 문자 타입들의 나열로 슬라이스 해준다. 그리고 다시 btnListItemEls에 넣어준다.
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    //galleryResize를 실행해준다.
    galleryResize();
    // addEvent를 실행해준다.
    addEvent();
}
// 초기화 함수 호출.
init();

// 이미지 갤러리의 설명 및 배경 색 변경

// 변수로 필요한 id들을 가져온다.
var _one = document.querySelector('#one');
var _two = document.querySelector('#two');
var _three = document.querySelector('#three');
var _four = document.querySelector('#four');
var back = document.querySelector('.section6');

// 함수를 만들어 준다(이벤트 핸들러에 넣을 함수)
function One(e){
    // 변수 안에 info라는 Id를 가져온다.
    var idOne = document.getElementById('info');
    // 거기에 innerText를 사용해 글씨를 넣어준다.
    idOne.innerText = "시간의 직면 / FACE THE WHOLE (MARTINI)";
    // back(section6)의 백그라운드 색상을 변경한다.
    back.style.backgroundColor = "#e5e4e2";
}
// 이벤트 핸들러를 만들어 _one을 클릭할 때, 함수 One을 실행시킨다.
_one.addEventListener("click", One);
// 함수를 만들어 준다(이벤트 핸들러에 넣을 함수)
function Two(e){
    // 변수 안에 info라는 Id를 가져온다.
    var id = document.getElementById('info');
    // 거기에 innerText를 사용해 글씨를 넣어준다.
    id.innerText = "유혹의 다른 방법 / WEARING ME";
    // back(section6)의 백그라운드 색상을 변경한다.
    back.style.backgroundColor = "#c4c4c4";
}
// 이벤트 핸들러를 만들어 _two을 클릭할 때, 함수 Two을 실행시킨다.
_two.addEventListener("click", Two);
// 함수를 만들어 준다(이벤트 핸들러에 넣을 함수)
function Three(e){
    // 변수 안에 info라는 Id를 가져온다.
    var id = document.getElementById('info');
    // 거기에 innerText를 사용해 글씨를 넣어준다.
    id.innerText = "아귀 / CREATURE OF THE DEEP";
    // back(section6)의 백그라운드 색상을 변경한다.
    back.style.backgroundColor = "#a7a7a7";
}
// 이벤트 핸들러를 만들어 _three을 클릭할 때, 함수 Three을 실행시킨다.
_three.addEventListener("click", Three);
// 함수를 만들어 준다(이벤트 핸들러에 넣을 함수)
function Four(e){
    // 변수 안에 info라는 Id를 가져온다.
    var id = document.getElementById('info');
    // 거기에 innerText를 사용해 글씨를 넣어준다.
    id.innerText = "탈 / DETACHED";
    // back(section6)의 백그라운드 색상을 변경한다.
    back.style.backgroundColor = "#838383";
}
// 이벤트 핸들러를 만들어 _four을 클릭할 때, 함수 Four을 실행시킨다.
_four.addEventListener("click", Four);


// ------------- 햄버거 버튼 구동 ------------- //

// 버튼과 안에 들어갈 내용을 불러온다.
var button = document.querySelector('#menu'),
    menu = document.querySelector('#OverlayMenu'),
    // _isOpen이 false이다.
    _isOpen = false;

    // addEventListener를 통해 click했을 경우 함수가 발동하게 설정한다.
button.addEventListener("click", function(e){
    // 이렇게 중복된 이벤트를 지워주면 옆으로 슬라이드 되어 나오는 메뉴배경과, 햄버거 버튼 모양이 변경되지 않았다..
    // e.stopPropagation();
    // e.preventDefault();

    // 만약, _isOpen이 false라면,
    if(!_isOpen){
        console.log("1")
        // menu에 fadeInNaV라는 클래스를 추가해준다.
        // 이를 통해 불투명도가 조절 될 것이다.
        menu.classList.add('fadeInNav');
        // 혹시 fadeOut이라는 클래스가 있다면 지워준다.
        // menu.classList.remove('fadeOut');
    }
    // 또한 만약, _isOpen이 true라면,
    else{
        console.log("2")
        // menu에 fadeInNav라는 클래스를 삭제한다.
        menu.classList.remove('fadeInNav');
        // 그리고 fadeOut이라는 클래스를 더해준다.
        // menu.classList.add('fadeOut');
    }
    // 밖에 _isOpen = !_isOpen을 작성하여 isOpen의 값을 변경해준다.
    _isOpen = !_isOpen;
})


// ------------- top 버튼 구동 ------------- //

// // 먼저, 변수 topButton을 만들어 #topButton을 가져온다.
// var topButton = document.querySelector('.scroll-top');
// // 그 topButton에 이벤틀 핸들러를 할당해준다.
// topButton.addEventListener("click", function(e){
//     // 클릭하면 top클래스를 부여해준다.
//     // document.classList.add("top");
//     // window.scrollTo(0,300);
//     _scroll
// })

// // 다시 만든다..
// document.addEventListener("scroll", function(e){
//     var scroll = window.scrolltop();
//     if(scroll > 50)
// })

// 또 다시 만든다..

// topButton.addEventListener("click", function(e){
//     var ScrollPercentage = getScrollPercentage();
//     ScrollPercentage += 10;
// })

// 없는 것도 나쁘지 않은 것 같기도 하고,, 다른 기능들과 부딪히지 않게 그냥 없애기로 결정!
// 시간 남으면 다시 구동해봐야징!