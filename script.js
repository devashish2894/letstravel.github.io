let navbar =document.querySelector('.header .navbar');
let openn=document.getElementById('close');

openn.onclick=()=>{
    navbar.classList.add('active');
}

// //////via quaryselector//////////////
document.querySelector('#nav-close').onclick=()=>{
    navbar.classList.remove('active');
}


let box=document.querySelector(".search-form");

document.querySelector('#searchbt').onclick=()=>{box.classList.add('active')}

document.querySelector('#close-search').onclick=()=>{box.classList.remove('active')};


var swiper = new Swiper(".home-slider", {
  loop:true,
  grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {

        0: {
          slidesPerView: 1,
          
        },
        640: {
          slidesPerView: 2,
          
        },
        768: {
          slidesPerView: 3,
          
        },
        1024: {
          slidesPerView: 4,
          
        },
      },
    });



    var swiper = new Swiper(".home-slider", {
      loop:true,
      grabCursor:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
      var swiper = new Swiper(".client-slider", {
        loop:true,
        grabCursor:true,
        spaceBetween:20,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
    
            0: {
              slidesPerView: 1,
              
            },

            320: {
              slidesPerView: 1,
              
            },

            480: {
              slidesPerView: 1,
              
            },
            640: {
              slidesPerView: 2,
              
            },
            768: {
              slidesPerView: 3,
              
            },
            1024: {
              slidesPerView: 4,
              
            },
          },
        });
  

        var swiper = new Swiper(".blog-slider", {
          loop:true,
          grabCursor:true,
          spaceBetween:20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
      
              0: {
                slidesPerView: 1,
                
              },
  
              320: {
                slidesPerView: 1,
                
              },
  
              480: {
                slidesPerView: 1,
                
              },
              640: {
                slidesPerView: 2,
                
              },
              768: {
                slidesPerView: 3,
                
              },
              1024: {
                slidesPerView: 4,
                
              },
            },
          });
    
  










window.onscroll=()=>{navbar.classList.remove('active');
  if(window.scrollY>0){
    document.querySelector('.header').classList.add('active');}
  else{
    document.querySelector('.header').classList.remove('active');}

}


window.onload=()=>{
  if(window.scrollY>0){
    document.querySelector('.header').classList.add('active');}
  else{
    document.querySelector('.header').classList.remove('active');}

}