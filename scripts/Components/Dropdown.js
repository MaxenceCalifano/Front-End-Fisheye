class dropdown {
    render() {

        const dropdown = document.createElement('div');
        dropdown.setAttribute('class', 'dropdown_wrapper')
        const label = document.createElement('label');
        label.setAttribute('for', 'order-by');
        label.textContent = "Trier par";

        const select = document.createElement("select");
        select.setAttribute("name", "order-by");
        select.setAttribute("id", "order-by");
        select.setAttribute("class", "dropdown");

        const option1 = document.createElement('option');
        option1.setAttribute('value', 'popularite');
        option1.textContent = "Popularité";
        
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'date');
        option2.textContent = "Date";
        
        const option3 = document.createElement('option');
        option3.setAttribute('value', 'titre');
        option3.textContent = "Titre";

        select.append(option1, option2, option3);

        dropdown.append(label, select);

        return dropdown;
    }
}
export { dropdown }