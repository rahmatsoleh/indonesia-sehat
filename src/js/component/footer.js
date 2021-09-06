class Footer extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<p>Rahmat Soleh &copy; 2021 Fundamental Front End Development</p>
        <p>Indosat Idcamp 2021 | Dicoding</p>`;
    }
}

customElements.define("text-footer", Footer);