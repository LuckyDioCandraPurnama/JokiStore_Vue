window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("onscroll");
    document.getElementById("scroll-btn").classList.add("scroll-btn");
  } else {
    document.getElementById("navbar").classList.remove("onscroll");
    document.getElementById("scroll-btn").classList.remove("scroll-btn");
  }
}