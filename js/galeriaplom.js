var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
  { id: 'plomeria1', alt: '1' },
  { id: 'plomeria2', alt: '2' },
  { id: 'plomeria3', alt: '3' },
  { id: 'plomeria4', alt: '4' },
  { id: 'plomeria5', alt: '5' },
  { id: 'plomeria6', alt: '6' },
  { id: 'plomeria7', alt: '7' },
  { id: 'plomeria8', alt: '8' },
  { id: 'plomeria9', alt: '9' },
  { id: 'plomeria10', alt: '10' },
  { id: 'plomeria11', alt: '11' },
  { id: 'plomeria12', alt: '12' },
  { id: 'plomeria13', alt: '13' },
  { id: 'plomeria14', alt: '14' },
  { id: 'plomeria15', alt: '15' },
  { id: 'plomeria16', alt: '16' },
  { id: 'plomeria17', alt: '17' },
  { id: 'plomeria18', alt: '18' },
  { id: 'plomeria19', alt: '19' },
  { id: 'plomeria20', alt: '20' },
  { id: 'plomeria21', alt: '21' },
  { id: 'plomeria22', alt: '22' },
  { id: 'plomeria23', alt: '23' },
  { id: 'plomeria24', alt: '24' },
  { id: 'plomeria25', alt: '25' },
  { id: 'plomeria26', alt: '26' },
  { id: 'plomeria27', alt: '27' },
  { id: 'plomeria28', alt: '28' },
  { id: 'plomeria29', alt: '29' }
  
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
