let photoPosition = document.querySelector('.page1-middle-left-photo');

function animate(obj, x, y, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        let step_x = (x - obj.offsetLeft) / 10;
        let step_y = (y - obj.offsetTop) / 10;
        step_x = step_x > 0 ? Math.ceil(step_x) : Math.floor(step_x);
        step_y = step_y > 0 ? Math.ceil(step_y) : Math.floor(step_y);
        if (obj.offsetLeft == x && obj.offsetTop == y) {
            clearInterval(obj.timer);
            if (callback) callback();
        }
        obj.style.left = obj.offsetLeft + step_x + 'px';
        obj.style.top = obj.offsetTop + step_y + 'px';
    }, 30)
}

let position1 = document.querySelector('.page1-middle-left-photo-text-position1');
let position2 = document.querySelector('.page1-middle-left-photo-text-position2');
let position3 = document.querySelector('.page1-middle-left-photo-text-position3');
let position4 = document.querySelector('.page1-middle-left-photo-text-position4');
let position5 = document.querySelector('.page1-middle-left-photo-text-position5');
let position6 = document.querySelector('.page1-middle-left-photo-text-position6');
let position7 = document.querySelector('.page1-middle-left-photo-text-position7');
let position8 = document.querySelector('.page1-middle-left-photo-text-position8');
let rightBox = document.querySelector('.page1-middle-right-photoBox');
let fadenum = document.querySelectorAll('.animate-fadenum');
let leftMove = document.querySelector('.page3-main-box-left');
let topMove1 = document.querySelector('.page3-main-box-right-top-left');
let topMove2 = document.querySelector('.page3-main-box-right-top-right');
let rightMove = document.querySelector('.page3-main-box-right-bottom');
// 感觉用数组写会更好，但写了一晚上不想动脑子了（躺
let member1 = document.querySelector('.member1');
let member2 = document.querySelector('.member2');
let member3 = document.querySelector('.member3');
let member4 = document.querySelector('.member4');

function animate_backTop(obj, y, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        // let step_x = (x - obj.offsetLeft) / 10;
        let step_y = (y - window.pageYOffset) / 10;
        // step_x = step_x > 0 ? Math.ceil(step_x) : Math.floor(step_x);
        step_y = step_y > 0 ? Math.ceil(step_y) : Math.floor(step_y);
        if (window.pageYOffset == y) {
            clearInterval(obj.timer);
            if (callback) callback();
        }
        window.scroll(0, window.pageYOffset + step_y);
    }, 10)
};

let back = document.querySelector('.backArrow');
back.addEventListener('click', () => {
    animate_backTop(window, 0);
})

let to = document.querySelector('.header-cycle');
to.addEventListener('click', () => {
    animate_backTop(window, 764);
})

document.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 720) {
        animate(position1, 60, 450, () => {
            position1.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position1 page1-middle-left-photo-text-position-anime';
        });
        animate(position2, 230, 460, () => {
            position2.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position2 page1-middle-left-photo-text-position-anime';
        });
        animate(position3, 395, 440, () => {
            position3.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position3 page1-middle-left-photo-text-position-anime';
        });
        animate(position4, 548, 460, () => {
            position4.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position4 page1-middle-left-photo-text-position-anime';
        });
        animate(position5, 445, 512, () => {
            position5.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position5 page1-middle-left-photo-text-position-anime';
        });
        animate(position6, 580, 550, () => {
            position6.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position6 page1-middle-left-photo-text-position-anime';
        });
        animate(position7, 10, 550, () => {
            position7.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position7 page1-middle-left-photo-text-position-anime';
        });
        animate(position8, 250, 550, () => {
            position8.className = 'page1-middle-left-photo-text page1-middle-left-photo-text-position8 page1-middle-left-photo-text-position-anime';
        });
        animate(rightBox, 140, 250);
    }
    if (window.pageYOffset >= 355) {
        fadenum[0].className = 'fadenum';
        fadenum[1].className = 'fadenum';
    }
    if (window.pageYOffset >= 1764) {
        leftMove.style.animation = 'leftMove 1s forwards';
        topMove1.style.animation = 'topMove 1s forwards';
        topMove2.style.animation = 'topMove 1s forwards';
        rightMove.style.animation = 'rightMove 1s forwards';
    }
    if (window.pageYOffset >= 2272) {
        member1.style.animation = 'toRight 12s linear infinite';
        member2.style.animation = 'toRight 8s linear infinite';
        member3.style.animation = 'toLeft 15s linear infinite';
        member4.style.animation = 'toLeft 20s linear infinite';
    }
    if (window.pageYOffset >= 932) back.style.display = 'flex';
    else back.style.display = 'none';
})

