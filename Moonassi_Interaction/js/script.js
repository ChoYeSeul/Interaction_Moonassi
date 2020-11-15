// // // ------------- 마우스 따라 퐁퐁퐁 효과 ------------- //

// 이벤트 리스너를 사용하여 식 작성, 마우스를 움직일 때 함수 발동
document.addEventListener('mousemove', function(e) {
    // 변수들을 만들어 불러오기
    var html = document.querySelector('html');
    var circle = document.createElement('span');

    // 스크롤을 무시하고 현재 화면 내의 x와 y의 값을 가져올 수 있도록 변수로 선언하여 안에 e.client값들을 넣어준다.(clientX, clientY)
    var x = e.clientX;
    var y = e.clientY;

    // css로 html 안에 pointer-events:none 을 줘야 실행이 되었는데 그렇게 되면 다른 햄버거 버튼, 다크모드가 클릭해도 반응이 없게 되었다.
    // 그래서 deco라는 class를 하나 만들어서 그 안에 pointer-events:none를 주고, 마우스를 움직일 때 그 클래스가 추가되도록 하였다.
    circle.classList.add('deco');

    // circle(span)의 위치에 아까 변수로 불러온 clientX와 clientY값을 가져와 left위치에서의 x값, top위치에서의 y값으로 업데이트 해준다.
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    // console.log(x + "px" + y + "px");
    // 다양한 사이즈를 랜덤으로 퐁퐁 뽑아내기 위해 0 ~ 40까지의 범위 조정
    var size = Math.random() * 40;
    // circle(span)의 위치에 width의 값과 height값 안에 size(위에서 랜덤값 만들어 준 것)을 적당한 숫자(20)과 더하여 넣어준다.
    // 이렇게 되면 랜덤으로 막 circle이 생성될 것이다.
    circle.style.width = 20 + size + "px";
    circle.style.height = 20 + size + "px";
    // html에 circle을 넣어준다(나타나게)
    html.appendChild(circle);
    // 만들어진 방울들이 모두 화면에 나타나면 너무 로딩도 길어지고 복잡해짐.
    // setTimeout을 사용해서 일정 시간(8초) 후 circle을 지우자.
    setTimeout(function() {
      circle.remove();
    }, 800);
  });

//   여기까지 하고 나니 생성은 되는데 이미지 위에 올라가면 오류가 났다ㅠ 원인을 찾아 해결하기 위해 노력중..
//  해결했다! css에서 html에 pointer-events를 none으로 해줬더니 된다..! 대신 이 퐁퐁 효과를 사용하려면 마우스를 이용한 무언가를 하기 복잡해질듯..하지만 버릴 수 없어..
// 해결했다. circle.에 deco라는 클래스를 추가해주고, deco안에 pointer-events를 none으로 넣어주면 된다.
//----------------------------------------

    // ...마우스 따라 움직이는 오브젝트 만드는 중... //

// window.addEventListener("mousemove", function(e){
//     var Container = document.querySelector(".container");
//     // console.log(Container);
//     var Img1 = document.querySelector("#img1");
//     // console.log(Img1);
//     var resultWN = -80 + ((160 / winW) * e.pageX);
//     var winH = window.screen.height;
//     var winW = window.screen.width;
//     var cardResultXN = -45 + ((90 / winW) * e.pageX);
//     var cardResultYN = 45 - ((90 / winH) * e.pageY);
//     var bgResultXN = 5 - ((10 / winW) * e.pageX);
//     var bgResultYN = 5 - ((10 / winH) * e.pageY);

//     // Container({
//     //     'background-position': bgResultXN + 'px ' + bgResultYN + 'px'
//     // });
//     // Img1({
//     //     'transform': 'rotateX(' + cardResultYN + 'deg) rotateY(' + cardResultXN + 'deg)',
//     // })
// })

    // 아 드디어 성공...!

// 먼저 변수 img에 #img1을 넣는다.
var img = document.querySelector("#img1");

// 이벤트 리스너를 사용하여 마우스가 움직일때("mousemove") 함수를 실행해준다.
document.addEventListener("mousemove", function(e){
    // img를 기준으로 위치를 받아왔다. 엉뚱하게 기울길래 뒤에 적당한 값을 빼줬더니 나름 안정되게 기운다.
    // posX에 현재 도큐먼트의 clientX의 값을 받아오고 img(위에서 움직이고자 했던 이미지의 변수)가 실제로 차지하고 있는 공간을 나누고 일정값을빼줬다.
    // posY도 마찬가지로 진행하여 X의 값과 Y의 값 모두 완성. 마우스를 움직일 때마다 계속해서 업데이트.
    var posX = e.clientX / img.clientWidth -0.6;
        posY = e.clientY / img.clientHeight -0.6;
        // console.log(e);

        // gsap을 연결하여 사용하였다.
        // 움직일 이미지의 아이디 값을 입력했다.
        gsap.to("#img1", 2, {
            // rotationY와 X를 지정해준다.
            // 위 아래로는 좀 덜 기울고, 양 옆으로는 더 기울게 만들고 싶어 
            // pos값에 약간의 수를 곱해줬다(X에 20, Y에 18). 생각대로 된다!
            // img를 더 기울게 만들어 3d로 공간을 만든 것에 공간감을 더 살려주었다. 이렇게라도...흑흑
            rotationY: posX * 25,
            rotationX: posY * 23,
            ease: Power1.easeOut,
            });
            // 움직일 텍스트의 클래스 값을 입력했다.
            // 위 img와 마찬가지로 입력해주었다.
        gsap.to(".title", 2, {
            rotationY: posX * 20,
            rotationX: posY * 18,
            ease: Power1.easeOut,
            });         
});

// transform-style을 preserve-3d로 두고 translateZ를 이용해서 공간감을 만들어 구현했다! 이미지와 뒤 글씨의 공간감이 마우스를 움직일 때 나타나게끔 의도하여 제작했지만..
// 생각보다 드라마틱 하지 않아서 약간 속상..힝 하지만 이 글을 발견하신다면 알아주세요 저의 노력ㅠ

// ------------- 하이퍼링크 및 스케일 애니메이션 ------------- //
    // ㄴ시도하다가 이상해지길래 말았다.. 그래도 좋은 시도였다!

// var gallerypage = document.querySelector(".galleryPage");
// var galleryfunction = document.addEventListener("mouseover", function(e){
//     gallerypage.classList.add('backgroundimg');
// })



    // Scale Animation
    // document.addEventListener("mousemove", function(e){
    //     var cir1 = document.querySelector(".circle2");
    //     cir1.classList.add('scale_animation');
    //     // console.log(e);
    //     // console.log("mousemove");  
    // })

    // transition Animation
    // document.addEventListener("mousemove", function(e){
    //     var cir2 = document.querySelector(".circle2");
    //     cir2.classList.add('ts');
    // })


    // ------------- 스크롤 감지 애니메이션 ------------- //

    // 먼저, 현재의 스크롤 위치를 퍼센트로 알아내기 위한 식 작성, 함수로 묶어 'getScrollPercentage라는 이름으로 선언해준다.
function getScrollPercentage(e){
    return(window.scrollY + window.innerHeight) / document.body.clientHeight * 100;
}

// 먼저 효과를 줄 섹션들을 변수로 불러와 선언해준다.
var statement = document.querySelector('#statement');
var imgs = document.querySelector('#imgs');

// 이벤트리스너를 이용하여 이벤트를 넣어준다.
    document.addEventListener("scroll", function(e){
        var ScrollPercentage = getScrollPercentage();
        // 만약 스크롤의 퍼센트가 61보다 크거나 같다면,(대략 statement가 머리를 내미는 순간)
        if(ScrollPercentage >= 61){
            // statement에 fateIn(애니메이션을 넣어놓은 class)를 넣어준다.
            statement.classList.add('fadeIn');
        console.log(ScrollPercentage); // 현재의 스크롤 퍼센트를 알아보기 위한 콘솔 출력. 좋다.
        }
    })
 // 같은 방식으로 작성, else if를 사용하여 위 식에 이어 작성했더니 왜인지 오류가 뜨길래 따로 작성했더니 정상 작동된다!
    document.addEventListener("scroll", function(e){
        var ScrollPercentage = getScrollPercentage();
        // 만약 스크롤의 퍼센트가 78보다 크거나 같다면,(대략 imgs들이 머리를 내미는 순간)
        if(ScrollPercentage >= 78){
            // imgs에 fadeIn을 넣어준다.
            imgs.classList.add('fadeIn');
        }
    })

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
// function onClickButton(e){
//     el.classList.toggle("fadeInNav");
//     console.log(menu.classList);
// }
// button.addEventListener("click", onClickButton);

// ------------- 다크 모드 ------------- //
// 토글 버튼 구현에 어려움이 있었지만 교수님께서 도움을 주셨다..흑흑
// float타입의 변수를 사용하여 1이라면, 아니라면~으로 작성을 했었는데 이것을 bool타입으로 바꿔 false라면, true라면~으로 변경했더니 된다!

// documentElement외 필요한 것들을 받아온다.
var htmlEl = document.documentElement,
    SectionMain = document.querySelector('.main')
    checkBoxEl = document.querySelector("input[name=switch]"),
    // 토글 버튼의 구동을 위해 bool형식의 변수 하나를 선언해준다.
    _isDarkMode = false;

    // input버튼에 이벤트 핸들러를 넣어준다.
    checkBoxEl.addEventListener("change", function(e){
        // currentTarget을 받아와 _isDarkMode에 el.checked를 넣어준다.
        var el = e.currentTarget;
        _isDarkMode = el.checked;
        // 만약, _isDarkMode가 true라면,
        if(_isDarkMode){
            // htmlEl에 mode-light클래스를 지워주고, mode-dark 클래스를 넣어준다.
            htmlEl.classList.remove("mode-light");
            htmlEl.classList.add("mode-dark");

            // 또는, _isDarkMode가 false라면,
        }else{
            // htmlEl에 mode-dark클래스를 지워주고, mode-light 클래스를 넣어준다.
            htmlEl.classList.remove("mode-dark");
            htmlEl.classList.add("mode-light");
        }
    });


// ------------- Close ------------- //
// 다른 페이지들과 자연스럽게 연결하고싶었는데 자꾸 이상하게 어긋난다..바로 그냥 주석처리

// var container = document.querySelector('body'),
//     MenuButton1 = document.querySelector('#indexPage'),
//     MenuButton2 = document.querySelector('#galleryPage'),
//     MenuButton3 = document.querySelector('#ImagesPage');



// MenuButton1.addEventListener('click', function(e){
//     container.classList.add("Close");
// })
    

