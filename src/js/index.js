let toggler = document.querySelector(".menu-toggler");
let menuContent = document.querySelector(".menu-content");
let logo = document.querySelector(".logo");

toggler.addEventListener("click", handleToggler);

function handleToggler(evt) {
  animateToggle([toggler, menuContent, logo]);
}

function animateToggle(activeElements, classesToadd=[]) {
  classesToadd.push("active");
  
  activeElements.forEach(element => 
    !element.classList.contains("active") ?
      classesToadd.forEach(item => element.classList.add(item)) :
      classesToadd.forEach(item => element.classList.remove(item))
  );
}