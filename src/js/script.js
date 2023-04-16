let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed = new Typed(".multiple-text", {
    strings: ['加入JavaAgents', "更多的帧数", "启动器汉化","自定义JDK","自定义游戏窗口名","完全开源"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})