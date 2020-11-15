var el = document.querySelector("#body");
var imgCon = document.querySelector("#image-container");
var imgCon1 = document.querySelector("#image-container1");
var imgCon2 = document.querySelector("#image-container2");
var isScrolling = true;
var pos = 1;

// 스크롤 속도 확인,
var checkScrollSpeed = (function(e) {
    // || 문법은 변수 선언에 있어서 해당하는 값이 있는 경우 앞의 값을 선언하고 없는 경우에는 뒤의 값을 선언하게 된다. //
	e = e || {};

	var lastPos,
		newPos,
		timer,
		delta,
		delay = e.delay || 10;

	return function() {
		// nowPos라는 값에 현재 윈도우 y스크롤 값을 넣는다.
        newPos = window.scrollY;
        // lastPos라는 변수의 값이 null이 아닐 경우,
		if (lastPos != null) {
            // newPos(새로운 위치) - lastPos(전 위치) 를 delta값에 넣어준다.
            delta = newPos - lastPos;
        }
        // 그리고 lastPos값에 newPos를 넣어준다. 이를 반복.
		lastPos = newPos;
	};
});
// imgCon1.style.transform = "translate(0px, -3100px)";

window.onscroll = function() {
	isScrolling = false;
    pos = checkScrollSpeed();
    // 스크롤 위치 조정 (image-container1만 스크롤을 내릴 때 정상적으로 내려감, 나머지는 반대로 올라감)
    wpos = window.scrollY;
    // 중간 scrollY변수에는 적당한 값을 빼줘야 시작할 떄 화면 밖으로 이미지들이 나가버리지 않고, 스크롤을 내릴 때 역방향으로 움직이지 않는다.
    wpos1 = window.scrollY -3900 ; 
    // scrollY의 값을 콘솔해본다. 그 값이 wpos에 들어가고, 그 값에서 -3900한 값이 wpos1에 들어간다.
	console.log(window.scrollY);
	var i0 = imgCon.style.transform = "translate(0px, -" + wpos + "px)";
	var i1 = imgCon1.style.transform = "translate(0px, " + wpos1 + "px)";
    var i2 = imgCon2.style.transform = "translate(0px, -" + wpos + "px)";

    // 이미지가 12개씩이기 때문에 12까지,
	for (var i = 1; i <= 12; i++) {
		document.getElementById("image" + i).style.transform =
            pos;
            // 정상 작동.
            // console.log("Y(" + pos + "움직임)");
		document.getElementById("image-" + i).style.transform =
			-pos;
		document.getElementById("image_" + i).style.transform =
			pos;
	}
};

// ------------- 햄버거 버튼 구동 ------------- //

// 버튼과 안에 들어갈 내용을 불러온다.
var button = document.querySelector('#menu'),
    menu = document.querySelector('#OverlayMenu'),
    // _isOpen이 false이다.
    _isOpen = false;

    // addEventListener를 통해 click했을 경우 함수가 발동하게 설정한다.
button.addEventListener("click", function(e){
    // 이렇게 중복된 이벤트를 지워주면 옆으로 슬라이드 되어 나오는 메뉴배경과, 햄버거 버튼 모양이 변경되지 않았다..
    // 따라서 html상에서의 구조를 변경해주었다.
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
