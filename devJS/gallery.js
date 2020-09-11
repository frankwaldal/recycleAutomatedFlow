document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('click', openLightbox);
});

document.querySelectorAll('.backArrow').forEach(item => {
    item.addEventListener('click', flipImgBack);
});

document.querySelectorAll('.nextArrow').forEach(item => {
    item.addEventListener('click', flipImgNext);
});

function openLightbox() {
    document.querySelector('#shadow').style.display = 'block';
    this.className = 'lightbox imgCont';
    this.removeEventListener('click', openLightbox);
    this.addEventListener('click', closeLightbox);
    this.childNodes[1].childNodes[1].style.display = 'block';
    this.childNodes[1].childNodes[3].style.display = 'block';
    if ("ontouchstart" in document.documentElement) {
        document.addEventListener('swiped-left', flipImgNext);
        document.addEventListener('swiped-right', flipImgBack);
    } else {
        document.addEventListener('keydown', keyPressEvent);
    }
}

function keyPressEvent(e) {
    e.preventDefault();
    if (e.keyCode === 37) {
        flipImgBack();
    } else if (e.keyCode === 39) {
        flipImgNext();
    }
}

function closeLightbox() {
    this.removeEventListener('click', closeLightbox);
    this.addEventListener('click', openLightbox);
    this.className = 'icon imgCont';
    this.childNodes[1].childNodes[1].style.display = 'none';
    this.childNodes[1].childNodes[3].style.display = 'none';
    document.querySelector('#shadow').style.display = 'none';
    if ("ontouchstart" in document.documentElement) {
        document.removeEventListener('swiped-left', flipImgNext);
        document.removeEventListener('swiped-right', flipImgBack);
    } else {
        document.removeEventListener('keydown', keyPressEvent);
    }
}

function flipImgBack(e) {
    if (e !== undefined) {
        e.stopPropagation();
    }
    var imgCont = document.querySelectorAll('.imgCont');
    for (i=0;i<imgCont.length;i++) {
        if (imgCont[i].className === 'lightbox imgCont') {
            imgCont[i].className = 'icon imgCont';
            imgCont[i].removeEventListener('click', closeLightbox);
            imgCont[i].addEventListener('click', openLightbox);
            imgCont[i].childNodes[1].childNodes[1].style.display = 'none';
            imgCont[i].childNodes[1].childNodes[3].style.display = 'none';
            if (i-1<0) {
                imgCont[imgCont.length-1].className = 'lightbox imgCont';
                imgCont[imgCont.length-1].removeEventListener('click', openLightbox);
                imgCont[imgCont.length-1].addEventListener('click', closeLightbox);
                imgCont[imgCont.length-1].childNodes[1].childNodes[1].style.display = 'block';
                imgCont[imgCont.length-1].childNodes[1].childNodes[3].style.display = 'block';
            } else {
                imgCont[i-1].className = 'lightbox imgCont';
                imgCont[i-1].removeEventListener('click', openLightbox);
                imgCont[i-1].addEventListener('click', closeLightbox);
                imgCont[i-1].childNodes[1].childNodes[1].style.display = 'block';
                imgCont[i-1].childNodes[1].childNodes[3].style.display = 'block';
            }
            return
        }
    }
}

function flipImgNext(e) {
    if (e !== undefined) {
        e.stopPropagation();
    }
    var imgCont = document.querySelectorAll('.imgCont');
    for (i=0;i<imgCont.length;i++) {
        if (imgCont[i].className === 'lightbox imgCont') {
            imgCont[i].className = 'icon imgCont';
            imgCont[i].removeEventListener('click', closeLightbox);
            imgCont[i].addEventListener('click', openLightbox);
            imgCont[i].childNodes[1].childNodes[1].style.display = 'none';
            imgCont[i].childNodes[1].childNodes[3].style.display = 'none';
            if (i+1===imgCont.length) {
                imgCont[0].className = 'lightbox imgCont';
                imgCont[0].removeEventListener('click', openLightbox);
                imgCont[0].addEventListener('click', closeLightbox);
                imgCont[0].childNodes[1].childNodes[1].style.display = 'block';
                imgCont[0].childNodes[1].childNodes[3].style.display = 'block';
            } else {
                imgCont[i+1].className = 'lightbox imgCont';
                imgCont[i+1].removeEventListener('click', openLightbox);
                imgCont[i+1].addEventListener('click', closeLightbox);
                imgCont[i+1].childNodes[1].childNodes[1].style.display = 'block';
                imgCont[i+1].childNodes[1].childNodes[3].style.display = 'block';
            }
            return
        }
    }
}
