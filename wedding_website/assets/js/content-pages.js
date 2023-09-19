let tooltipLinks = document.querySelectorAll('a[data-tooltip]');

if (tooltipLinks != null || tooltipLinks != undefined) {

    tooltipLinks.forEach((link) => {
        link.addEventListener('mouseover', (e) => {

                // e = Mouse hover event.
                var rect = e.currentTarget.getBoundingClientRect();
                var x = e.pageX // - rect.left; //x position within the element.
                var y = e.pageY // - rect.top;  //y position within the element.
                // console.log("Left? : " + x + " ; Top? : " + y + ".");
              

          let tooltipContent = link.getAttribute('data-tooltip');  
          let tooltipDiv = document.createElement('div');

          tooltipDiv.classList.add('tooltip');
          tooltipDiv.id = 'tooltip'
          tooltipDiv.style.left = x + 'px';
          tooltipDiv.style.top = y + 'px';
          tooltipDiv.innerHTML = tooltipContent;

          link.parentNode.insertBefore(tooltipDiv, link);

        }); // end mouseover

        
        link.addEventListener('mouseout', () => {

            let tooltip = document.getElementById('tooltip');
            tooltip.parentNode.removeChild(tooltip);

        }); // end mouseout
        
      });

};


