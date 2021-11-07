const hamburger = document.getElementById("hamburger");

const topNav = document.getElementById("top-nav");

const colorContainerDiv = document.querySelector('.color');

const add = document.querySelector('.add');



hamburger.addEventListener("click", () => {

  topNav.classList.toggle("show");

});



colorContainerDiv.addEventListener('click', function changePageBackgroundColor(e) {

  const htmlBody = document.querySelector('body');
  if (htmlBody.style.backgroundColor = '#ed48ba') {
    add.style.backgroundColor = 'lightgrey';
  }
  htmlBody.style.backgroundColor = e.target.parentNode.style.color;

  
});
