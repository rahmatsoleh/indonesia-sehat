class DataSource {

    constructor(url, media) {
        this.url = url;
        this.media = media;
    }

    searchData() {
        $('.loader').toggleClass('d-none');

        fetch(this.url)
            .then(response => response.json())
            .then(responseJson => {
                this.media(responseJson);
                $('.loader').toggleClass('d-none');
            })
            .catch(error => {
                console.log(error);
                $('.loader').toggleClass('d-none');
                alert('Ajax Error');
            })
    }
}

export default DataSource;