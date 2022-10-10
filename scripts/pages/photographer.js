async function getPhotographer() {
    let url = new URL(window.location);
    const photographerID = url.searchParams.get("id")
    
    let photographer;
    await fetch('../../data/photographers.json')
    .then(res => res.json())
    .then(res => { photographer = res.photographers})
    .catch(err => console.log('an error occurs', err))
    
    photographer = photographer.find( element => element.id == photographerID)
    console.log(photographer)
    
    return ({photographer : photographer})
}

    
 function displayData(photographer) {
        const photographerSection = document.querySelector(".photograph-header"); 
        const photographerModel = photographerFactory(photographer, 'photographerPage');
        const userPageDOM = photographerModel.getPhotographerPage();
        
        photographerSection.appendChild(userPageDOM[1])
        photographerSection.appendChild(userPageDOM[0]);
        photographerSection.innerHTML += userPageDOM[2];
};


async function init() {
    // Récupère les datas des photographes
    const { photographer } = await getPhotographer();
    displayData(photographer);
};

init();