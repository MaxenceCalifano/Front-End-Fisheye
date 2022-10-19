const body = document.querySelector("body");

function displayModal() {
    const modal = document.getElementById("contact_modal");
    body.setAttribute("aria-hidden", true);
    const closeButton = document.querySelector(".modal header img");
    closeButton.focus();
	  modal.style.display = "block";
    modal.setAttribute("aria-hidden", false);
}

function closeModal() {
    
    const modal = document.getElementById("contact_modal");

    modal.setAttribute("closing", "");
  
    modal.addEventListener("animationend", () => {
      modal.removeAttribute("closing");
      modal.style.display= "none";
    }, {once: true})
    body.setAttribute("aria-hidden", false);

}

document.addEventListener('keydown', (event) =>{
  const isModalOpen = body.getAttribute('aria-hidden'); 
  if(event.key === 'Escape' && isModalOpen === 'true'){
    console.log('test')
      closeModal();
  }
})