import poster from '../../img/poster.png';

class ContentJumbotron extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<article class="jumbotron">
                            <div class="banner">
                                <div class="poster">
                                    <h2>Menuju</h2>
                                    <h1>INDONESIA SEHAT</h1>
                                    <p>Mari kita wujudkan indonesia sehat bersama-sama</p>
                                    <a href="#vaksinasi">Lihat Detail &rarr;</a>
                                </div>
                                <img src="${poster}" alt="">
                            </div>
                        </article>`;
    }
}

customElements.define("article-jumbotron", ContentJumbotron);