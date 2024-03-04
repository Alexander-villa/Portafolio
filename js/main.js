function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


    //.GLIDE
    const config = {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: 3000,
    //  breakpoints: {
      //    912: {
      //        perView: 2
      //    },
      //    550: {
      //        perView: 1
      //    }
      //}
  };

  new Glide('.glide', config).mount();


