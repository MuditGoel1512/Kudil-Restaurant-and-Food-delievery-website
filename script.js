document.addEventListener('DOMContentLoaded', (event) => {
  const slides = document.querySelectorAll('.slide');
  const navButtons = document.querySelectorAll('.carousel-nav button');
  let currentSlide = 0;

  function showSlide(index) {
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
function initMap() {
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