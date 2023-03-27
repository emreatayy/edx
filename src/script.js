//Header Script
function over() {
  out2();
  document.getElementById("myDIV").style.display = "block";
}
function out() {
  document.getElementById("myDIV").style.display = "none";
}

function over2() {
  out();
  document.getElementById("myDIV2").style.display = "block";
}
function out2() {
  document.getElementById("myDIV2").style.display = "none";
}
function search() {
  var wsearchbar = document.getElementById("wsbar");
  var wsb = document.getElementById("wsb");
  var wsb2 = document.getElementById("wsb2");

  wsearchbar.addEventListener("focusin", (event) => {
    wsearchbar.style.width="600px";
    wsearchbar.style.marginLeft="120px";
    wsb.style.display = "none";
    wsb2.style.display = "block";
  });

  wsearchbar.addEventListener("focusout", (event) => {
    wsearchbar.style.width="270px";
    wsearchbar.style.marginLeft="580px";
    wsb.style.display = "block";
    wsb2.style.display = "none";
  });
}

  function msb() {
    var msi = document.getElementById("msi");
    var msx = document.getElementById("msx");
    var msb = document.getElementById("msb");
    var lgrad = document.getElementById("lgrad");
    msi.style.display = "block";
    lgrad.style.display = "block";
    msb.style.display = "none";
    msx.style.display = "block";
  }

  function msx() {
    var msi = document.getElementById("msi");
    var msx = document.getElementById("msx");
    var msb = document.getElementById("msb");
    var lgrad = document.getElementById("lgrad");
    msi.style.display = "none";
    lgrad.style.display = "none";
    msb.style.display = "block";
    msx.style.display = "none";
  }

  function mdrop() {
    var loginmobile = document.getElementById("loginmobile");
    var lgrad2 = document.getElementById("lgrad2");
    var mdrop = document.getElementById("mdrop");
    var mdropx = document.getElementById("mdropx");

    loginmobile.style.display = "block";
    lgrad2.style.display = "block";
    mdrop.style.display = "none";
    mdropx.style.display = "block";
  }
  function mdropx() {
    var mdrop = document.getElementById("mdrop");
    var mdropx = document.getElementById("mdropx");
    var loginmobile = document.getElementById("loginmobile");
    var lgrad2 = document.getElementById("lgrad2");

    mdrop.style.display = "block";
    mdropx.style.display = "none";
    loginmobile.style.display = "none";
    lgrad2.style.display = "none";
  }

  function dropli() {
    var loginmobile = document.getElementById("loginmobile");
    var dropul = document.getElementById("dropul");
    var down = document.getElementById("down");
    var up = document.getElementById("up");

    loginmobile.style.height = "505px";
    dropul.style.display = "block";
    down.style.display = "none";
    up.style.display = "block";
  }

  function upli() {
    var loginmobile = document.getElementById("loginmobile");
    var dropul = document.getElementById("dropul");
    var down = document.getElementById("down");
    var up = document.getElementById("up");

    loginmobile.style.height = "250px";
    dropul.style.display = "none";
    down.style.display = "block";
    up.style.display = "none";
  }




  var slideIndex = 1;
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  function showDivs(n){
    var i;
    var x = document.getElementsByClassName("mySlides");
    var l = document.getElementById("carousel-left");
    var r = document.getElementById("carousel-right");

    if (slideIndex ==2 ) {
      l.style.visibility = "visible";
    }

    if (slideIndex ==1 ) {
      l.style.visibility = "hidden";
    }

    if (slideIndex == 11) {
      r.style.visibility = "hidden"
    }
    if (slideIndex < 11) {
      r.style.visibility = "visible"
    }

    for (i = 0; i < x.length-5; i=i+5) {
      x[i].style.display = "none";  
      x[i+1].style.display = "none"; 
      x[i+2].style.display = "none";
      x[i+3].style.display = "none";
      x[i+4].style.display = "none";
      x[i+5].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";  
    x[slideIndex].style.display = "block"; 
    x[slideIndex+1].style.display = "block"; 
    x[slideIndex+2].style.display = "block"; 
    x[slideIndex+3].style.display = "block"; 
    x[slideIndex+4].style.display = "block"; 
  }


const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

//new on edx
  function executive() {
    var exeBtn = document.getElementById("executive");
    var masBtn = document.getElementById("master");
    var bacBtn = document.getElementById("bachelor");

    exeBtn.style.display = "block";
    masBtn.style.display = "none";
    bacBtn.style.display = "none";
  }

  function master() {
    var exeBtn = document.getElementById("executive");
    var masBtn = document.getElementById("master");
    var bacBtn = document.getElementById("bachelor");

    exeBtn.style.display = "none";
    masBtn.style.display = "block";
    bacBtn.style.display = "none";
  }

  function bachelor() {
    var exeBtn = document.getElementById("executive");
    var masBtn = document.getElementById("master");
    var bacBtn = document.getElementById("bachelor");

    exeBtn.style.display = "none";
    masBtn.style.display = "none";
    bacBtn.style.display = "block";
  }

  var slideIndex1 = 1;
  function sliderbtn(n) {
    showDivs1(slideIndex1 += n);
  }
  function showDivs1(n){
    var i;
    var x = document.getElementsByClassName("index-slide");

    var l = document.getElementById("left-btn");
    var r = document.getElementById("right-btn");

    if (slideIndex1 ==2 ) {
      l.style.visibility = "visible";
    }

    if (slideIndex1 ==1 ) {
      l.style.visibility = "hidden";
    }

    if (slideIndex1 == 9) {
      r.style.visibility = "hidden"
    }
    if (slideIndex1 < 9) {
      r.style.visibility = "visible"
    }

    for (i = 0; i < x.length-7; i=i+6) {
      x[i].style.display = "none";  
      x[i+1].style.display = "none"; 
      x[i+2].style.display = "none";
      x[i+3].style.display = "none";
      x[i+4].style.display = "none";
      x[i+5].style.display = "none";
      x[i+6].style.display = "none";
    }
    x[slideIndex1-1].style.display = "flex";  
    x[slideIndex1].style.display = "flex"; 
    x[slideIndex1+1].style.display = "flex"; 
    x[slideIndex1+2].style.display = "flex"; 
    x[slideIndex1+3].style.display = "flex"; 
    x[slideIndex1+4].style.display = "flex"; 
    x[slideIndex1+5].style.display = "flex"; 
  }