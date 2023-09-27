let tooltipLinks = document.querySelectorAll('a[data-tooltip]');

if (tooltipLinks != null || tooltipLinks != undefined) {

    tooltipLinks.forEach((link) => {
        link.addEventListener('mouseover', (e) => {

                // e = Mouse hover event.
                var rect = e.currentTarget.getBoundingClientRect();
                var scrollDistance = window.scrollY;
                var x = e.pageX; // - rect.left; //x position within the element.
                var y = e.pageY  - scrollDistance;  // - rect.top;  //y position within the element.
                // console.log("Left? : " + x + " ; Top? : " + y + ".");
              

          let tooltipContent = link.getAttribute('data-tooltip');  
          let tooltipDiv = document.createElement('div');

          tooltipDiv.classList.add('tooltip');
          tooltipDiv.id = 'tooltip'
          tooltipDiv.style.left = x + "px";
          tooltipDiv.style.top = y + "px";
          tooltipDiv.innerHTML = tooltipContent;

          link.parentNode.insertBefore(tooltipDiv, link);

        }); // end mouseover

        
        link.addEventListener('mouseout', () => {

            let tooltip = document.getElementById('tooltip');
            tooltip.parentNode.removeChild(tooltip);

        }); // end mouseout
        
      });

};

// determine if any gallerys are on page

let galleryExists = false;

    if (document.querySelector('.gallery')) {
      galleryExists = true
    }

    if (galleryExists == true) {

      let galleries = document.querySelectorAll('.gallery');

      galleries.forEach((gallery) => {

        let galleryId = gallery.getAttribute('data-galleryId');

        let swiper = new Swiper(gallery, {
          // Optional parameters
          loop: false,
          centeredSlides: true,
          initialSlide: 1,
          slidesPerView: 'auto',
          spaceBetween: 32,
          
          mousewheel: {
            forceToAxis: true,
          },

          keyboard: {
            enabled: true,
          },
        
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        }); 

      }); // end foreach gallery in galleries

    }



