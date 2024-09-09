var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
  { id: 'hogar1', alt: '1' },
  { id: 'hogar2', alt: '2' },
  { id: 'hogar3', alt: '3' },
  { id: 'hogar4', alt: '4' },
  { id: 'hogar5', alt: '5' },
  { id: 'hogar6', alt: '6' },
  { id: 'hogar7', alt: '7' },
  { id: 'hogar8', alt: '8' },
  { id: 'hogar9', alt: '9' },
  { id: 'hogar10', alt: '10' },
  { id: 'hogar11', alt: '11' },
  { id: 'hogar12', alt: '12' },
  { id: 'hogar13', alt: '13' },
  { id: 'hogar14', alt: '14' },
  { id: 'hogar15', alt: '15' }
  
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
