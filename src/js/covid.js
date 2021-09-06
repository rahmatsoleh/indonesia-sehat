import 'jquery';

const covid = data => {

    const { penambahan, total } = data;

    $('.covid p span').html(`${penambahan.tanggal} Pukul ${penambahan.created.slice(11, 19)} WIB`);
    $('.data-pusat .positif h1').text(convertDesimal(total.positif));
    $('.data-pusat .positif p span').text(convertDesimal(penambahan.positif));
    $('.data-pusat .sembuh h1').text(convertDesimal(total.sembuh));
    $('.data-pusat .sembuh p span').text(convertDesimal(penambahan.sembuh));
    $('.data-pusat .meninggal h1').text(convertDesimal(total.meninggal));
    $('.data-pusat .meninggal p span').text(convertDesimal(penambahan.meninggal));
    $('.data-pusat .dirawat h1').text(convertDesimal(total.dirawat));
    $('.data-pusat .dirawat p span').text(convertDesimal(penambahan.dirawat));

}

const covidProvinsi = data => {
    
    const option = `<option value="">-- Pilih Provinsi --</option>`;
    let provinsi = ``;

    for (let row of data.data) {
        provinsi += `<option value="${row.kodeProvi}"> ${row.provinsi} </option>`;
    }

    $('#covidProvinsi').html(option + provinsi);

    $('#covidProvinsi').on('change', () => {
        filter(data, $('#covidProvinsi').val());
    })

}

const filter = (object, value) => {
    const { data } = object;
    
    if (value) {

        let index = 0;

        for (let i = 0; i < data.length; i++){
            if (value == data[i].kodeProvi) {
                index = i;
            }
        }

        $('.data-provinsi .positif h1').text(convertDesimal(data[index].kasusPosi));
        $('.data-provinsi .sembuh h1').text(convertDesimal(data[index].kasusSemb));
        $('.data-provinsi .meninggal h1').text(convertDesimal(data[index].kasusMeni));

    } else {
        $('.data-provinsi .positif h1').text('0');
        $('.data-provinsi .sembuh h1').text('0');
        $('.data-provinsi .meninggal h1').text('0');
    }

}

const convertDesimal = number => number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export { covidProvinsi, covid };
