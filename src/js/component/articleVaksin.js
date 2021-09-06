import man from '../../img/man.png';

class Vaksinasi extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<article class="vaksin" id="vaksinasi">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CE1212" fill-opacity="1" d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,160C672,181,768,235,864,234.7C960,235,1056,181,1152,181.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <h2>Data Vaksinasi</h2>
                            <hr>
                            <div class="banner-vaksin">
                                <img src="${man}" alt="">
                                <div class="data-kartu">
                                    <div class="total-sasaran card">
                                        <h3>Sasaran Vaksin</h3>
                                        <h1>0</h1>
                                        <p>Target Nasional Seluruh Penduduk</p>
                                    </div>
                                    <div class="dosis-vaksin">
                                        <div class="vaksin-1 card">
                                            <h3>Vaksinasi Dosis 1</h3>
                                            <h1>0</h1>
                                            <p>Jumlah penerima vaksin dosis 1</p>
                                        </div>
                                        <div class="vaksin-2 card">
                                            <h3>Vaksinasi Dosis 2</h3>
                                            <h1>0</h1>
                                            <p>Jumlah penerima vaksin dosis 2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>`;
    }
}

customElements.define("article-vaksinasi", Vaksinasi);