var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
 { id: 'ferreteria1', alt: '1' },
 { id: 'ferreteria2', alt: '2' },
 { id: 'ferreteria3', alt: '3' },
 { id: 'ferreteria4', alt: '4' },
 { id: 'ferreteria5', alt: '5' },
 { id: 'ferreteria6', alt: '6' },
 { id: 'ferreteria7', alt: '7' },
 { id: 'ferreteria8', alt: '8' },
 { id: 'ferreteria9', alt: '9' },
 { id: 'ferreteria10', alt: '10' },
 { id: 'ferreteria11', alt: '11' },
 { id: 'ferreteria12', alt: '12' },
 { id: 'ferreteria13', alt: '13' },
 { id: 'ferreteria14', alt: '14' },
 { id: 'ferreteria15', alt: '15' },
 { id: 'ferreteria16', alt: '16' },
 { id: 'ferreteria17', alt: '17' },
 { id: 'ferreteria18', alt: '18' },
 { id: 'ferreteria19', alt: '19' },
 { id: 'ferreteria20', alt: '20' },
 { id: 'ferreteria21', alt: '21' },
 { id: 'ferreteria22', alt: '22' },
 { id: 'ferreteria23', alt: '23' },
 { id: 'ferreteria24', alt: '24' },
 { id: 'ferreteria25', alt: '25' },
 { id: 'ferreteria26', alt: '26' },
 { id: 'ferreteria27', alt: '27' },
 { id: 'ferreteria28', alt: '28' },
 { id: 'ferreteria29', alt: '29' },
 { id: 'ferreteria30', alt: '30' },
 { id: 'ferreteria31', alt: '31' },
 { id: 'ferreteria32', alt: '32' },
 { id: 'ferreteria33', alt: '33' },
 { id: 'ferreteria34', alt: '34' },
 { id: 'ferreteria35', alt: '35' },
 { id: 'ferreteria36', alt: '36' },
 { id: 'ferreteria37', alt: '37' },
 { id: 'ferreteria38', alt: '38' },
 { id: 'ferreteria39', alt: '39' },
 { id: 'ferreteria40', alt: '40' },
 { id: 'ferreteria41', alt: '41' },
 { id: 'ferreteria42', alt: '42' },
 { id: 'ferreteria43', alt: '43' }
  
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
