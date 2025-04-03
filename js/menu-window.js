const menuWindow = document.getElementById("menuWindow");
const menuWindowInner = menuWindow.children[0];

const menuWindowOpenBtn = document.getElementById("menuWindowOpen")
const menuWindowCloseBtn = document.getElementById("menuWindowClose")
const menuWindowLinks = menuWindow.querySelectorAll("a")

function open() {
    menuWindow.showModal();
    menuWindowInner.classList.add("menu-window__inner--opened")
}

function close() {
    menuWindowInner.classList.remove("menu-window__inner--opened")
    setTimeout(() => {
        menuWindow.close()
    }, 300)
}

menuWindowLinks.forEach(item => {
    item.onclick = close;
})


menuWindowOpenBtn.onclick = open
menuWindowCloseBtn.onclick = close
