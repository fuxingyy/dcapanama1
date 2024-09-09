var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
  { id: 'electronicos1', alt: '1' },
  { id: 'electronicos2', alt: '2' },
  { id: 'electronicos3', alt: '3' },
  { id: 'electronicos4', alt: '4' },
  { id: 'electronicos5', alt: '5' },
  { id: 'electronicos6', alt: '6' },
  { id: 'electronicos7', alt: '7' },
  { id: 'electronicos8', alt: '8' },
  { id: 'electronicos9', alt: '9' },
  { id: 'electronicos10', alt: '10' },
  { id: 'electronicos11', alt: '11' },
  { id: 'electronicos12', alt: '12' },
  { id: 'electronicos13', alt: '13' },
  { id: 'electronicos14', alt: '14' }
  
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
