import man from '../../img/rescue.png';

class ArticleHospital extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<article class="rumah-sakit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CE1212" fill-opacity="1" d="M0,128L18.5,154.7C36.9,181,74,235,111,218.7C147.7,203,185,117,222,106.7C258.5,96,295,160,332,176C369.2,192,406,160,443,165.3C480,171,517,213,554,224C590.8,235,628,213,665,208C701.5,203,738,213,775,229.3C812.3,245,849,267,886,277.3C923.1,288,960,288,997,245.3C1033.8,203,1071,117,1108,85.3C1144.6,53,1182,75,1218,112C1255.4,149,1292,203,1329,202.7C1366.2,203,1403,149,1422,122.7L1440,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
                            <h2>Data Rumah Sakit</h2>
                            <hr>
                            <div class="header">
                                <div class="filter-data">
                                    <div class="form-control">
                                        <label for="props">Provinsi</label>
                                        <select name="props" id="props">
                                            <option value="">-- Pilih Provinsi --</option>
                                        </select>
                                    </div>
                                    <div class="form-control">
                                        <label for="Kota">Kabupaten / Kota</label>
                                        <select name="Kota" id="kota">
                                            <option value="">-- Pilih  Kota --</option>
                                        </select>
                                    </div>
                                    <div class="form-control">
                                        <label for="type">Type</label>
                                        <select name="type" id="type">
                                            <option value="">-- Pilih Jenis Layanan --</option>
                                        </select>
                                    </div>
                                    <div class="form-control">
                                        <label for="rs">Rumah Sakit</label>
                                        <select name="rs" id="rs">
                                            <option value="">-- Pilih  Rumah Sakit --</option>
                                        </select>
                                    </div>
                                    <div class="data-rumah-sakit">
                                        <table class="contact">
                                            <tr>
                                                <td width="50%">Nama Rumah Sakit</td>
                                                <td id="title"> : <span></span></td>
                                            </tr>
                                            <tr>
                                                <td>Alamat</td>
                                                <td id="adress">: <span></span></td>
                                            </tr>
                                            <tr>
                                                <td>Telepon</td>
                                                <td id="phone">: <span></span></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td id="maps"> <a href="">Lihat Lokasi di Maps &rarr;</a></td>
                                            </tr>
                                        </table>
                                        <table class="bed-rest">
                                            <thead>
                                                <tr>
                                                    <th>Nama Kamar</th>
                                                    <th>Ketersediaan</th>
                                                    <th>Kosong</th>
                                                    <th>Antrean</th>
                                                    <th>Update Pada</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <img src="${man}" alt="">
                            </div>
                        </article>`;
    }

}

customElements.define('article-hospital', ArticleHospital);