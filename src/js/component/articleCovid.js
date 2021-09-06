class ArticleCovid extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<article class="covid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEEBDD" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,250.7C672,288,768,288,864,250.7C960,213,1056,139,1152,101.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <h2>Data Covid</h2>
                            <hr>
                            <p><em>Update Pada <span>-</span></em></p>
                            <div class="data-covid">
                                <div class="data-pusat">
                                    <h2>Data Covid di Indonesia</h2>
                                    <div class="card-data-area">
                                        <div class="card-data positif">
                                            <h3>Jumlah Positif</h3>
                                            <h1>0</h1>
                                            <p>Terjadi Penambahan <span>0</span></p>
                                        </div>
                                        <div class="card-data sembuh">
                                            <h3>Jumlah Sembuh</h3>
                                            <h1>0</h1>
                                            <p>Terjadi Penambahan <span>0</span></p>
                                        </div>
                                        <div class="card-data meninggal">
                                            <h3>Jumlah Meninggal</h3>
                                            <h1>0</h1>
                                            <p>Terjadi Penambahan <span>0</span></p>
                                        </div>
                                        <div class="card-data dirawat">
                                            <h3>Jumlah di Rawat</h3>
                                            <h1>0</h1>
                                            <p>Terjadi Penambahan <span>0</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-provinsi">
                                    <h2>Lihat Data Provinsi</h2>
                                    <select name="" id="covidProvinsi">
                                    </select>
                                    <div class="card-data-area">
                                        <div class="card-data positif">
                                            <h3>Jumlah Positif</h3>
                                            <h1>0</h1>
                                        </div>
                                        <div class="card-data sembuh">
                                            <h3>Jumlah Sembuh</h3>
                                            <h1>0</h1>
                                        </div>
                                        <div class="card-data meninggal">
                                            <h3>Jumlah Meninggal</h3>
                                            <h1>0</h1>
                                    </div>
                                </div>
                            </div>
                        </article>`;
    }
}

customElements.define('article-covid', ArticleCovid);