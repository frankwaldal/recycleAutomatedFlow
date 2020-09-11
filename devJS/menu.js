document.querySelector('.menuButton').addEventListener('click', menu);

function menu() {
    var menu = document.querySelector('.menu');
    var menuCont = document.querySelector('.menu ul');
    if (menu.style.width === '' || menu.style.width === '0px') {
        menu.style.width = '100vw';
        setTimeout(() => {menuCont.style.display = 'flex'},200);
    } else {
        menu.style.width = '0';
        menuCont.style.display = 'none';
    }
}
