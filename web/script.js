window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.querySelector('.navbar').classList.remove('navbar-top');
    document.querySelector('.search-bar').classList.add("scrolled");
    document.querySelectorAll('.fontcolor').forEach(element => {
      element.classList.add('black');
    });
    document.querySelectorAll('.nav-link').forEach(element => {
      element.classList.add('fontcolor_black');
    });
  } else {
    document.querySelector('.navbar').classList.add('navbar-top');
    document.querySelector('.search-bar').classList.remove("scrolled");
    document.querySelectorAll('.fontcolor').forEach(element => {
      element.classList.remove('black');
    });
    document.querySelectorAll('.nav-link').forEach(element => {
      element.classList.remove('fontcolor_black');
    });
  }
});