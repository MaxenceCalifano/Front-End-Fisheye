
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("closing", "");
  
    modal.addEventListener("animationend", () => {
      modal.removeAttribute("closing");
      modal.style.display= "none";
    }, {once: true})
}

const form = document.querySelector("#contact_modal form");
console.log(form);
form.addEventListener("submit", function(e){
  e.preventDefault();
  const formData = new FormData(form);
  for (const [name,value] of formData) {
    console.log(name, ":", value)
  }
})