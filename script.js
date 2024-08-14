let scrollToTop = document.getElementById("toTop");
let img1 = document.getElementById('about-img-1');
let img2 = document.getElementById("about-img-2");
let recipe1 = document.getElementsByClassName("first")[0];
let recipe2 = document.getElementsByClassName("second")[0];
let recipe3 = document.getElementsByClassName("third")[0];
let recipe4 = document.getElementsByClassName("fourth")[0];
console.log(recipe1);
let image1 = document.getElementsByClassName("first-image")[0];
let imageDiv1 = document.querySelector(".first-image div");
let image2 = document.getElementsByClassName("second-image")[0];
let imageDiv2 = document.querySelector(".second-image div");
let image3 = document.getElementsByClassName("third-image")[0];
let imageDiv3 = document.querySelector(".third-image div");
let image4 = document.getElementsByClassName("fourth-image")[0];
let imageDiv4 = document.querySelector(".fourth-image div");

document.addEventListener('DOMContentLoaded', (event) => {
  const slides = document.querySelectorAll('.slide');
  const navButtons = document.querySelectorAll('.carousel-nav button');
  let currentSlide = 0;

async function showSlide(index) {
      slides[currentSlide].classList.remove('active');
      navButtons[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      navButtons[currentSlide].classList.add('active');
  }

  navButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          showSlide(index);
      });
  });

  // Auto slide functionality (optional)
  setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
  }, 6000); // Change slides every 6 seconds
});


//  For Google Maps
 async function initMap() {
    // The location of the place
    var location = {lat: 40.7128, lng: -74.0060};  // New York City coordinates
    // The map, centered at the location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    // The marker, positioned at the location
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    // Additional markers (optional)
    var locations = [
        {lat: 40.730610, lng: -73.935242},  // Example coordinates
        {lat: 40.729515, lng: -73.998672}   // Example coordinates
    ];

    for (var i = 0; i < locations.length; i++) {
        new google.maps.Marker({
            position: locations[i],
            map: map
        });
    }
}


// To achieve smooth scrolling to the up arrw key
// scrollToTop.addEventListener("click", (event) => {
//     event.preventDefault();
//     scrollToTop.scrollIntoView({behavior: 'smooth'});
// });


// To change the images when a user hover on the images in the about us page
img1.addEventListener('mouseover', () => {
    // img1.style.opacity = 0.5;
    setTimeout(() => {
        img1.src = 'images/img-flip-3.jpg';
        img1.style.transition = "0.3 ease-in";
        // img1.style.opacity = 1;
    }, 200)
});
img1.addEventListener("mouseout", () => {
    img1.src = 'images/img-flip-4.jpg';
});
img2.addEventListener('mouseover', () => {
    // img2.style.opacity = 0.5;
    setTimeout(() => {
        img2.src = 'images/img-flip-1.jpg';
        // img2.style.opacity = 1;
    }, 200)
});
img2.addEventListener("mouseout", () => {
    img2.src = 'images/img-flip-2.jpg';
});


recipe1.addEventListener("mouseover", () =>{
    setTimeout(() =>{
        image1.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/timeline-img1.jpg')";
        imageDiv1.style.letterSpacing = "0px";
        setTimeout(() => {
            // imageDiv.style.display = "block";
            imageDiv1.style.visibility = "visible";
        }, 200)
    });

});
recipe1.addEventListener("mouseout", () => {
    setTimeout(() => {
        image1.style.background = "url('images/timeline-img1.jpg')";
        imageDiv1.style.letterSpacing = "1rem";
        setTimeout(() => {
            imageDiv1.style.visibility = "hidden";
        }, 500);
    }, 200);
});

recipe2.addEventListener("mouseover", () =>{
    setTimeout(() =>{
        image2.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/img-flip-3.jpg')";
        imageDiv2.style.letterSpacing = "0px";
        setTimeout(() => {
            // imageDiv.style.display = "block";
            imageDiv2.style.visibility = "visible";
        }, 200)
    });

});
recipe2.addEventListener("mouseout", () => {
    setTimeout(() => {
        image2.style.background = "url('images/img-flip-3.jpg')";
        imageDiv2.style.letterSpacing = "1rem";
        setTimeout(() => {
            imageDiv2.style.visibility = "hidden";
        }, 500);
    }, 200);
});

recipe3.addEventListener("mouseover", () =>{
    setTimeout(() =>{
        image3.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/timeline-img3.jpg')";
        imageDiv3.style.letterSpacing = "0px";
        setTimeout(() => {
            // imageDiv.style.display = "block";
            imageDiv3.style.visibility = "visible";
        }, 200)
    });

});
recipe3.addEventListener("mouseout", () => {
    setTimeout(() => {
        image3.style.background = "url('images/timeline-img3.jpg')";
        imageDiv3.style.letterSpacing = "1rem";
        setTimeout(() => {
            imageDiv3.style.visibility = "hidden";
        }, 500);
    }, 200);
});

recipe4.addEventListener("mouseover", () =>{
    setTimeout(() =>{
        image4.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/img-flip-4.jpg')";
        imageDiv4.style.letterSpacing = "0px";
        setTimeout(() => {
            // imageDiv.style.display = "block";
            imageDiv4.style.visibility = "visible";
        }, 200)
    });

});
recipe4.addEventListener("mouseout", () => {
    setTimeout(() => {
        image4.style.background = "url('images/img-flip-4.jpg')";
        imageDiv4.style.letterSpacing = "1rem";
        setTimeout(() => {
            imageDiv4.style.visibility = "hidden";
        }, 500);
    }, 200);
});
