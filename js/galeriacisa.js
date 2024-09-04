var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
  { id: 'cisa1', alt: '1' },
  { id: 'cisa2', alt: '2' },
  { id: 'cisa3', alt: '3' },
  { id: 'cisa4', alt: '4' },
  { id: 'cisa5', alt: '5' },
  { id: 'cisa6', alt: '6' },
  { id: 'cisa7', alt: '7' },
  { id: 'cisa8', alt: '8' },
  { id: 'cisa9', alt: '9' },
  { id: 'cisa10', alt: '10' },
  { id: 'cisa11', alt: '11' },
  { id: 'cisa12', alt: '12' },
  { id: 'cisa13', alt: '13' },
  { id: 'cisa14', alt: '14' },
  { id: 'cisa15', alt: '15' },
  { id: 'cisa16', alt: '16' },
  { id: 'cisa17', alt: '17' },
  { id: 'cisa18', alt: '18' },
  { id: 'cisa19', alt: '19' },
  { id: 'cisa20', alt: '20' },
  { id: 'cisa21', alt: '21' },
  { id: 'cisa22', alt: '22' }
  
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
