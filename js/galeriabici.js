var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an array to store image details
var images = [
  { id: 'bicicleta1', alt: '1' },
  { id: 'bicicleta2', alt: '2' },
  { id: 'bicicleta3', alt: '3' },
  { id: 'bicicleta4', alt: '4' },
  { id: 'bicicleta5', alt: '5' },
  { id: 'bicicleta6', alt: '6' },
  { id: 'bicicleta7', alt: '7' },
  { id: 'bicicleta8', alt: '8' },
  { id: 'bicicleta9', alt: '9' },
  { id: 'bicicleta10', alt: '10' },
  { id: 'bicicleta11', alt: '11' },
  { id: 'bicicleta12', alt: '12' },
  { id: 'bicicleta13', alt: '13' },
  { id: 'bicicleta14', alt: '14' },
  { id: 'bicicleta15', alt: '15' },
  { id: 'bicicleta16', alt: '16' },
  { id: 'bicicleta17', alt: '17' },
  { id: 'bicicleta18', alt: '18' },
  { id: 'bicicleta19', alt: '19' },
  { id: 'bicicleta20', alt: '20' },
  { id: 'bicicleta21', alt: '21' },
  { id: 'bicicleta22', alt: '22' },
  { id: 'bicicleta23', alt: '23' },
  { id: 'bicicleta24', alt: '24' },
  { id: 'bicicleta25', alt: '25' },
  { id: 'bicicleta26', alt: '26' },
  { id: 'bicicleta27', alt: '27' },
  { id: 'bicicleta28', alt: '28' },
  { id: 'bicicleta29', alt: '29' },
  { id: 'bicicleta30', alt: '30' },
  { id: 'bicicleta31', alt: '31' },
  { id: 'bicicleta32', alt: '32' },
  { id: 'bicicleta33', alt: '33' },
  { id: 'bicicleta34', alt: '34' },
  { id: 'bicicleta35', alt: '35' },
  { id: 'bicicleta36', alt: '36' },
  { id: 'bicicleta37', alt: '37' },
  { id: 'bicicleta38', alt: '38' },
  { id: 'bicicleta39', alt: '39' },
  { id: 'bicicleta40', alt: '40' },
  { id: 'bicicleta41', alt: '41' },
  { id: 'bicicleta42', alt: '42' },
  { id: 'bicicleta43', alt: '43' },
  { id: 'bicicleta44', alt: '44' },
  { id: 'bicicleta45', alt: '45' },
  { id: 'bicicleta46', alt: '46' },
  { id: 'bicicleta47', alt: '47' }
  
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
