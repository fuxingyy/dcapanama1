var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
  { id: 'nipponamerica1', alt: '1' },
  { id: 'nipponamerica2', alt: '2' },
  { id: 'nipponamerica3', alt: '3' },
  { id: 'nipponamerica4', alt: '4' },
  { id: 'nipponamerica5', alt: '5' },
  { id: 'nipponamerica6', alt: '6' },
  { id: 'nipponamerica7', alt: '7' },
  { id: 'nipponamerica8', alt: '8' },
  { id: 'nipponamerica9', alt: '9' },
  { id: 'nipponamerica10', alt: '10' },
  { id: 'nipponamerica11', alt: '11' },
  { id: 'nipponamerica12', alt: '12' },
  { id: 'nipponamerica13', alt: '13' },
  { id: 'nipponamerica14', alt: '14' }
  
];

// Initialize the current slide index
var currentSlide = 0;

// Function to display the modal with the specified image
function openModal(index) {
  modal.style.display = "block";
  modalImg.src = document.getElementById(images[index].id).src;
  captionText.innerHTML = images[index].alt;
  currentSlide = index;
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to navigate to the next or previous slide
function plusSlides(n) {
  currentSlide += n;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  } else if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  openModal(currentSlide);
}

// Attach click event listeners to each image
images.forEach(function(image, index) {
  var img = document.getElementById(image.id);
  img.onclick = function() {
    openModal(index);
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  closeModal();
}
