// page scripts

//list as many as you'd like
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // header hamburger

  let menuTrigger = document.getElementById('menuTrigger'),
      menuOpen = false,
      logo = document.getElementById('logo'),
      menu = document.getElementById('main-menu');

      if (menuOpen == false) {
        menuTrigger.addEventListener("mouseover", () => {
            menuTrigger.classList.add('hovered');
        });

        menuTrigger.addEventListener("mouseout", () => {
            menuTrigger.classList.remove('hovered');
        });
    } // end if menu is not open

        menuTrigger.addEventListener("click", () => {
            if (menuOpen === false) {
                console.log('Open trigger clicked');
                menuTrigger.classList.add('opened');
                menu.classList.add('opened');
                logo.classList.add('reversed');
                menuOpen = true;
                console.log(menuOpen);
            } else if (menuOpen === true) {
                console.log('Close trigger clicked');
                menuTrigger.classList.remove('opened');
                menu.classList.remove('opened');
                logo.classList.remove('reversed');
                menuOpen = false;
                console.log(menuOpen);
            }
        }); // end menuTrigger click event handler


// header BG animations

ScrollTrigger.create({
    trigger: 'main',
    // markers: true,
    start: "200px top",
    id: 'one',
    toggleClass: { targets: ".site-header", className: "header-bg" }
  });
 

