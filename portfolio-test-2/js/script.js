//this code is meant to the span element "BENHADDOUCHE" to "BEN" when the window width<=575

var contentElement = document.querySelector('.container-texts h1 span');
function updateContent() {
  var windowWidth = window.innerWidth;

  if (windowWidth <= 575) {
    contentElement.textContent = "BEN";
  } else {
    contentElement.textContent = "BENHADDOUCHE";
  }
}
updateContent();
window.addEventListener('resize', updateContent);

//menu bar for media

const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
menu.addEventListener("click",()=>{
    hundleMenu();
})
function hundleMenu(){
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}

//smooth transition for the nav bar

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
