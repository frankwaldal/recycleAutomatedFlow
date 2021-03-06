function viewMoreInfo(e) {
  var id = e.target.className.substring(9);
  var infoCard = document.querySelector(`#${id}`);
  if (infoCard.style.display === 'none' || infoCard.style.display === '') {
    infoCard.style.display = 'block';
  } else {
    infoCard.style.display = 'none';
  }
}

function viewMoreInfoClose(e) {
  e.target.style.display = 'none';
}

document.querySelectorAll('.infoLink').forEach(item => {
  item.addEventListener('click', viewMoreInfo);
});

document.querySelectorAll('.hiddenInfo').forEach(item => {
  item.addEventListener('click', viewMoreInfoClose);
});
