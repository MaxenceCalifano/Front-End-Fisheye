class logo {
    render() {
        const homeLink = document.createElement('a');
        homeLink.setAttribute('href', 'index.html');

        const logoImg = document.createElement('img');
        logoImg.setAttribute('alt', 'Fisheye Home page');
        logoImg.setAttribute('src', 'assets/images/logo.png');
        logoImg.setAttribute('class', 'logo');
       
        homeLink.appendChild(logoImg);

        return homeLink;
    }
}

export { logo }