class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                nav h2 {
                    font-size: 2em;
                    text-transform: uppercase;
                }
            </style>
            <nav><h2>Indonesia Sehat</h2></nav>`;
    }
}

customElements.define("app-bar", AppBar);