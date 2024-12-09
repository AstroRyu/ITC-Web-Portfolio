// Highlight the active navigation link
const navLinks = document.querySelectorAll("nav ul li a");

// Set "Home" as active by default
window.addEventListener("load", () => {
  navLinks.forEach((link) => {
    if (link.href.includes("Main Page.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Change active class when clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});


function openModal(cardElement) {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  // Extract details from the clicked card
  const videoSrc = cardElement.querySelector("video").getAttribute("data-src");
  const title = cardElement.querySelector("h3").innerText;
  const description = cardElement.querySelector("p").innerText;

  // Set modal content
  modalTitle.innerText = title;
  modalDescription.innerText = description;
  modalVideo.src = videoSrc;

  // Load and play the video
  modalVideo.load();
  modalVideo.addEventListener("canplay", () => modalVideo.play());

  // Show the modal
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");

  // Pause and reset the video
  modalVideo.pause();
  modalVideo.src = "";

  // Hide the modal
  modal.style.display = "none";
}


function closeModal() {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");

  modalVideo.pause();
  modalVideo.src = "";
  modal.style.display = "none";
}


