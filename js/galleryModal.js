const openModal = () => {
  const modal = document.createElement("div");
  imageUrls = selectedVariant.modalImages;
  console.log(selectedVariant.variant);
  let index = 0;
  modal.id = "myModal";
  modal.className = "modal";

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  // Create modal image
  const modalImage = document.createElement("img");
  modalImage.id = "modalImage";
  modalImage.src = imageUrls[0];
  modalContent.appendChild(modalImage);

  // Create previous button
  const prevButton = document.createElement("button");
  prevButton.textContent = "◀";
  prevButton.onclick = () => prevImage(index);
  modalContent.appendChild(prevButton);

  // Create next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "▶";
  nextButton.onclick = () => nextImage(index);
  modalContent.appendChild(nextButton);

  // Create close button
  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  closeButton.onclick = () => closeModal();
  modalContent.appendChild(closeButton);

  // Append modal content to modal container
  modal.appendChild(modalContent);

  // Append modal to the body
  document.body.appendChild(modal);

  // Display the modal
  modal.style.display = "block";
  prevButton.classList.add("disabledButton");

  //Event listener to close modal when clicked outside
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const closeModal = () => {
    modal.classList.add("fade-out");
    // modal.style.display = "none";
    window.removeEventListener("click", closeModal);
  };

  const prevImage = () => {
    index !== 0 ? (index = index - 1) : null;
    modalImage.src = imageUrls[index];

    if (index !== imageUrls.length - 1) {
      nextButton.classList.remove("disabledButton");
    }
    if (index === 0) {
      prevButton.classList.add("disabledButton");
    }

    modalImage.classList.add("modalImageAnimLeft");
    // After adding the animation class, trigger a reflow
    void modalImage.offsetWidth;
    // Remove the animation class after the animation completes
    modalImage.addEventListener("animationend", () => {
      modalImage.classList.remove("modalImageAnimLeft");
    });
  };

  const nextImage = () => {
    index < imageUrls.length - 1 ? (index = index + 1) : null;

    if (index === imageUrls.length - 1) {
      nextButton.classList.add("disabledButton");
    }
    if (index !== 0) {
      prevButton.classList.remove("disabledButton");
    }

    modalImage.src = imageUrls[index];
    modalImage.classList.add("modalImageAnimRight");

    // After adding the animation class, trigger a reflow
    void modalImage.offsetWidth;
    // Remove the animation class after the animation completes
    modalImage.addEventListener("animationend", () => {
      modalImage.classList.remove("modalImageAnimRight");
    });
  };
};
