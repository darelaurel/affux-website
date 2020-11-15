function stickyNavigation() {

    let navbar=document.querySelector('.navbar');

    if (window.scrollY > 50) 
    {
        navbar.classList.add('sticky');
    } else 
    {
        navbar.classList.remove('sticky');
    }
  }
  
  window.addEventListener('scroll', stickyNavigation);