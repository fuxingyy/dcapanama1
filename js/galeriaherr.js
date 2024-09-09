var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
  { id: 'herramienta1', alt: '1' },
  { id: 'herramienta2', alt: '2' },
  { id: 'herramienta3', alt: '3' },
  { id: 'herramienta4', alt: '4' },
  { id: 'herramienta5', alt: '5' },
  { id: 'herramienta6', alt: '6' },
  { id: 'herramienta7', alt: '7' },
  { id: 'herramienta8', alt: '8' },
  { id: 'herramienta9', alt: '9' },
  { id: 'herramienta10', alt: '10' },
  { id: 'herramienta11', alt: '11' },
  { id: 'herramienta12', alt: '12' },
  { id: 'herramienta13', alt: '13' },
  { id: 'herramienta14', alt: '14' },
  { id: 'herramienta15', alt: '15' },
  { id: 'herramienta16', alt: '16' },
  { id: 'herramienta17', alt: '17' },
  { id: 'herramienta18', alt: '18' },
  { id: 'herramienta19', alt: '19' },
  { id: 'herramienta20', alt: '20' },
  { id: 'herramienta21', alt: '21' },
  { id: 'herramienta22', alt: '22' },
  { id: 'herramienta23', alt: '23' },
  { id: 'herramienta24', alt: '24' },
  { id: 'herramienta25', alt: '25' },
  { id: 'herramienta26', alt: '26' },
  { id: 'herramienta27', alt: '27' },
  { id: 'herramienta28', alt: '28' },
  { id: 'herramienta29', alt: '29' },
  { id: 'herramienta30', alt: '30' },
  { id: 'herramienta31', alt: '31' },
  { id: 'herramienta32', alt: '32' },
  { id: 'herramienta33', alt: '33' },
  { id: 'herramienta34', alt: '34' },
  { id: 'herramienta35', alt: '35' },
  { id: 'herramienta36', alt: '36' },
  { id: 'herramienta37', alt: '37' },
  { id: 'herramienta38', alt: '38' },
  { id: 'herramienta39', alt: '39' },
  { id: 'herramienta40', alt: '40' },
  { id: 'herramienta41', alt: '41' },
  { id: 'herramienta42', alt: '42' },
  { id: 'herramienta43', alt: '43' },
  { id: 'herramienta44', alt: '44' },
  { id: 'herramienta45', alt: '45' },
  { id: 'herramienta46', alt: '46' },
  { id: 'herramienta47', alt: '47' },
  { id: 'herramienta48', alt: '48' },
  { id: 'herramienta49', alt: '49' },
  { id: 'herramienta50', alt: '50' },
  { id: 'herramienta51', alt: '51' },
  { id: 'herramienta52', alt: '52' },
  { id: 'herramienta53', alt: '53' },
  { id: 'herramienta54', alt: '54' },
  { id: 'herramienta55', alt: '55' },
  { id: 'herramienta56', alt: '56' },
  { id: 'herramienta56', alt: '57' }
  
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
