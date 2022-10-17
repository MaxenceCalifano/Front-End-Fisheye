const main = document.querySelector("main");

function displayModal() {
    const modal = document.getElementById("contact_modal");
    main.setAttribute("aria-hidden", true);
    const closeButton = document.querySelector(".modal header img");
    closeButton.focus();
	  modal.style.display = "block";
}

function closeModal() {
    
    const modal = document.getElementById("contact_modal");

    modal.setAttribute("closing", "");
  
    modal.addEventListener("animationend", () => {
      modal.removeAttribute("closing");
      modal.style.display= "none";
    }, {once: true})
    main.setAttribute("aria-hidden", false);

}

document.addEventListener('keydown', (event) =>{
  const isModalOpen = main.getAttribute('aria-hidden');
  
  if(event.key === 'Escape' && isModalOpen === 'true'){
    console.log('test')
      closeModal();
  }
})