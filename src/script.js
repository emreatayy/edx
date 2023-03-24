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
      wsearchbar.style.width="200px";
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
      if (n > x.length) {
          slideIndex = 1
      }
      if (n < 1) {
          slideIndex = x.length
      }
      for (i = 0; i < x.length-1; i=i+2) {
        x[i].style.display = "none";  
        x[i+1].style.display = "none"; 
      }
      x[slideIndex-1].style.display = "block";  
      x[slideIndex].style.display = "block"; 
    }