
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")
  });
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("global").style.height = "0";
      document.getElementById("logoImg").style.width = "170px";
      document.getElementById("register").style.visibility = "hidden";
      document.getElementById("navBar").style.paddingTop ="0";
      document.getElementById("back-to-top").style.display = "block";


  
  
    } else {
      document.getElementById("global").style.height = "100px";
      document.getElementById("logoImg").style.width = "200px";
      document.getElementById("register").style.visibility = "visible";
      document.getElementById("navBar").style.paddingTop ="2%";
      document.getElementById("back-to-top").style.display = "none";
      
    }
  
  
  };

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
AOS.init({
  duration: 2000,
  once: false,
});
