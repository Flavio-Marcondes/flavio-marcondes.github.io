const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {

        // Detects the right tag for the animation
        if(entry.target.classList.contains('section1'))
        {
          // Add the animation class
          entry.target.classList.add('space1');
        }

        // Detects the right tag for the animation
        if(entry.target.classList.contains('section4'))
        {
          // Add the animation class
          entry.target.classList.add('space4');
        }
      }
    });
  });
  
  observer.observe(document.querySelector('.section1'));
  observer.observe(document.querySelector('.section4'));
  