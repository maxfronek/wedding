// page scripts

/* remove JS hover for CSS solution

let bigLinks = document.querySelectorAll('.big-links a');

bigLinks.forEach((link) => {
    let correspondingGallery = link.nextElementSibling;
    link.addEventListener('mouseover', () => {
        correspondingGallery.classList.add('show');
    });

    link.addEventListener('mouseout', () => {
        correspondingGallery.classList.remove('show');
     });


  });

  */