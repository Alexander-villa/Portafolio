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
      perView: 3,
      autoplay: 3000,
      breakpoints: {
          912: {
              perView: 2
          },
          550: {
              perView: 1
          }
      }
  };

  new Glide('.glide', config).mount();


  //SPLIDE

  var splide = new Splide('.splide', {
    type: 'loop',
    autoplay: true, // Establece autoplay en verdadero
    interval: 3000, // Intervalo de 3 segundos entre cada transición
    pauseOnHover: true, // Pausa el autoplay cuando el mouse está sobre el carrusel
    perPage: 4,
    arrows: false,
    breakpoints: {
        580: {
            perPage: 2, // Ajusta el número de elementos por página en el breakpoint de 580px
            //padding: '1rem' // Ajusta el relleno en el breakpoint de 580px
        },
        380: {
            perPage: 1, // Ajusta el número de elementos por página en el breakpoint de 380px
            //padding: '1rem' // Ajusta el relleno en el breakpoint de 380px
        }
    }
});

splide.mount();

