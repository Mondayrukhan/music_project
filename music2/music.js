document.addEventListener('DOMContentLoaded', function() {
    
const circleWrap = document.querySelector(".img-wrap");
const circle = document.querySelectorAll(".circle");
const refreshBtn = document.querySelector(".refresh-btn");
const dropZone = document.querySelector(".drop-zone");


//범위 내의 랜덤한 정수값을 얻어주는 함수
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//써클이 랜덤한 위치에 생성되는 함수
function randomCicle() {
    let wrapWidth = circleWrap.offsetWidth;
    let wrapHeight = circleWrap.offsetHeight;

    for(let i = 0; i < circle.length; i++){
        let randomTop = getRandomNumber(0, wrapHeight-150); //200은 원의 크기
        if(i < 3){
            let randomLeftL = getRandomNumber(0, (wrapWidth * 0.5) - dropZone.offsetWidth); 
            circle[i].style.left = randomLeftL + 'px';
            circle[i].style.top = randomTop + 'px';
            console.log(randomLeftL);
        }else{
            let randomLeftR = getRandomNumber((wrapWidth * 0.5) + (dropZone.offsetWidth * 0.5), wrapWidth - 150);
            circle[i].style.left = randomLeftR + 'px';
            circle[i].style.top = randomTop + 'px';
        }
    }
}
randomCicle();

//써클을 드래그 가능하게 하는 함수
$(function () {
    $(".circle").draggable(
        { stack: ".circle" }
    );
    $(".drop-zone").droppable({
        drop: function (event, ui) {
            let droppedCircle = ui.draggable;
            droppedCircle[0].style.display ="none";
            // console.log(droppedCircle[0].id);
            dropEvent(droppedCircle[0].id)
        }
    });
});

// 드래그 이벤트의 기본 동작 취소
for (var i = 0; i < circle.length; i++) {
    circle[i].addEventListener('dragstart', preventDefault);
}

function preventDefault(e) {
    e.preventDefault();
}


let saveZindex = 20; //drop-zone의 z-index를 서서히 쌓기 위해 저장해두는 변수

//drop-zone에 드래그 된 요소가 드랍될 경우 실행할 함수
function dropEvent(num){
    let targetImg = document.querySelector(`.drop-zone .${num}`);

    //drop-zone안의 같은 img 번호를 선택해 display:block으로 설정
    targetImg.style.display = "block";

    //drop-zone안의 같은 img 번호를 선택해 z-index를 20으로 놓고,
    targetImg.style.zIndex = saveZindex;  
    if(saveZindex === 20){ //saveZindex가 20일경우 처음 올려둔 이미지만 블렌드 모드를 기본으로
        targetImg.style.mixBlendMode = "normal";
    }
    saveZindex = saveZindex + 1; //함수가 한번 실행될 때마다 saveZindex에 1을 더한다.
}

refreshBtn.addEventListener("click", refresh); //refresh버튼에 클릭시 실행할 함수 할당

function refresh(){
    for (var i = 0; i < circle.length; i++) {
        circle[i].style.display = "block"; //모든 드래그 가능한 circle을 다시 display:block으로 보이게 만든다.
    }
    randomCicle(); //다시 랜덤 한 위치에 circle을 생성한다.

    let centerCicle = document.querySelectorAll(".drop-zone img"); //drop-zone 내의 모든 img를 선택
    saveZindex = 20; //saveZindex를 20으로 초기화
    centerCicle.forEach(element => {
        element.style.display = "none"; //drop-zone 내의 이미지를 다시 안보이게 display: none
        element.style.zIndex = "10"; //drop-zone 내의 이미지의 zIndex를 다시 처음으로 초기화
    });
}
  });
  
// const element = document.querySelector(".title");


//   element.addEventListener("click", function(e) {
//     e.preventDefault;
    
//     // -> removing the class
//     element.classList.remove("splash2");
    
//     // -> triggering reflow /* The actual magic */
//     // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
//     element.offsetWidth = element.offsetWidth;
    
//     // -> and re-adding the class
//     element.classList.add("splash2");
//   }, false);


// const myAudio = new Audio();
// myAudio.src = "./sound/01_suyeon_audio.mp3";
// // myAudio.play();
// const btnToggle = document.querySelector(".done");
// btnToggle.onclick = function () {
//     if (myAudio.paused) {
//         myAudio.play();
//     } else {
//         myAudio.pause();
//     }
// }

const Audio1 = new Audio();
Audio1.src = "./sound/01_suyeon_audio.mp3";
// myAudio.play();
const btnToggle1 = document.getElementById("img-01");
btnToggle1.onclick = function () {
    if (Audio1.paused) {
        Audio1.play();
    } else {
        Audio1.pause();
    }
}

const Audio2 = new Audio();
Audio2.src = "./sound/02_sunghoon_audio.mp3";
// myAudio.play();
const btnToggle2 = document.getElementById("img-02");
btnToggle2.onclick = function () {
    if (Audio2.paused) {
        Audio2.play();
    } else {
        Audio2.pause();
    }
}

const rotateButton = document.querySelectorAll(".drop-zone img");
    const targetElement = document.querySelectorAll(".done");

    rotateButton.addEventListener("click", function () {
      targetElement.classList.toggle("rotating");
    });

// const rotateButton = document.querySelectorAll(".done");
// const targetElement = document.querySelectorAll(".drop-zone");

// rotateButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       targetElements.forEach(function (element) {
//         element.classList.toggle("rotating");
//       });
//     });
//   });