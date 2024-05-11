const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

const body = document.querySelector(".main-body");



hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  // body.classList.toggle("dim")
});

document.getElementById('scroll-right-btn').addEventListener('click', function () {
  // var card = this.parentNode.querySelector('.container');
  // card.scrollLeft += 100; // Adjust the scroll distance as needed
  const newspaperSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  };

  var card = document.getElementById('cardd')
  card.animate(newspaperSpinning, newspaperTiming)
  
  console.log("scroll")
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}