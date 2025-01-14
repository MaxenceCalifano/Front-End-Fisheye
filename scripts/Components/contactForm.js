function displayModal() {
    const modal = document.getElementById("contact_modal");
    document.body.setAttribute("aria-hidden", true);
    const closeButton = document.querySelector(".modal header img");
    closeButton.focus();
    document.addEventListener('keydown', function handleclose(event) {
      if(event.key === 'Enter' || event.key === 'Escape'){
      closeModal(event);
      document.removeEventListener('keydown', handleclose)
 } })
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", false);
}

function closeModal() {
    const isModalOpen = document.body.getAttribute('aria-hidden');
    if(isModalOpen !== 'true') {
      return
    } else {
      const modal = document.getElementById("contact_modal");

      modal.setAttribute("closing", "");
  
      modal.addEventListener("animationend", () => {
      modal.removeAttribute("closing");
      modal.setAttribute("aria-hidden", true);
      modal.style.display= "none";
    }, {once: true})
    document.body.setAttribute("aria-hidden", false);
    }
}