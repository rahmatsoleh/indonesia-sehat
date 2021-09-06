import rahmsol from '../../img/rahmsol.png';

class Biodata extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEEBDD"       fill-opacity="1" d="M0,192L26.7,186.7C53.3,181,107,171,160,149.3C213.3,128,267,96,320,80C373.3,64,427,64,480,85.3C533.3,107,587,149,640,176C693.3,203,747,213,800,192C853.3,171,907,117,960,90.7C1013.3,64,1067,64,1120,106.7C1173.3,149,1227,235,1280,224C1333.3,213,1387,107,1413,53.3L1440,0L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            <h2>Developer</h2>
            <hr>
            <img src="${rahmsol}" alt="">
            <h3>Rahmat Soleh</h3>
            <p>solehr619@gmail.com</p>
            <a href="http://wa.me/6285736004793">Kirimkan Pesan</a>`;
    }
}

customElements.define('content-biodata', Biodata);