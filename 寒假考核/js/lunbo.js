function animate_lunbo(obj, x, y, callback) {
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
    }, 15)
}

    const focus = document.querySelector('.page2-main-box');
    let ul = focus.querySelector('ul');
    let li = ul.querySelectorAll('li');
    let ol = document.querySelector('ol');
    let focusWidth = focus.offsetWidth;
    for (let i = 0; i < li.length; i++) {
        let creatLi = document.createElement('li');
        creatLi.setAttribute('index', i);
        ol.appendChild(creatLi);
    }
    ol.children[0].className = 'liChange';
    // 创造圆圈
    let yuan = ol.querySelectorAll('li');
    for (let i = 0; i < yuan.length; i++) {
        yuan[i].addEventListener('click', () => {
            for (let i = 0; i < yuan.length; i++) {
                yuan[i].className = '';
            }
            yuan[i].className = 'liChange';
            // 点击小圆圈，移动图片
            // ul的移动距离 = 小圆圈的索引号 x 图片宽度 注意是负值
            let index = yuan[i].getAttribute('index');
            flag = index
            // let focusWidth = focus.offsetWidth;
            animate_lunbo(ul, - index * focusWidth);
        })
    }

    // 自动播放
    let flag = 1;
    let timer = setInterval(() => {
        yuan[flag].click();
        if (flag == 4) flag = 0;
        else flag++;
    }, 3000);
    focus.addEventListener('mouseenter', () => {
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', () => {
        timer = setInterval(() => {
            yuan[flag].click();
            if (flag == 4) flag = 0;
            else flag++;
        }, 3000);
    });