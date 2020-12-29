$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

    // scroll-animation

   const header = document.querySelector("header");
   const sectionOne = document.querySelector(".main-banner");

   const sectionOneOptions = {
     rootMargin: "-650px 0px 0px 0px"
   };

   const sectionOneObserver = new IntersectionObserver(function(
     entries,
     sectionOneObserver
   ) {
     entries.forEach(entry => {
       if (!entry.isIntersecting) {
         header.classList.add("nav-scrolled");
       } else {
         header.classList.remove("nav-scrolled");
       }
     });
   },
   sectionOneOptions);

   sectionOneObserver.observe(sectionOne);