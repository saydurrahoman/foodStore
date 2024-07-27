// off navber start
let navBer = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBer.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})
// scroll button
let toTop=document.querySelector(".totop");
window.addEventListener("scroll",function(){
    if(window.pageYOffset>100){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})