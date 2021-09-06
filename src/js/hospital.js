const hospital = object => {
    const { provinces } = object;

    let options = '<option value="">-- Pilih Provinsi --</option>';
    
    for (let row of provinces) {
        options += `<option value="${row.id}">${row.name}</option>`
    }

    $('#props').html(options);

    $('#props').on('change', () => {
        if ($('#props').val()) {

            $('.loader').toggleClass('d-none');

            fetch(`https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${props.value}`)
                .then(response => response.json())
                .then(responseJson => {
                    searchCity(responseJson);
                    $('.loader').toggleClass('d-none');
                })
                .catch(error => {
                    console.log(error);
                    $('.loader').toggleClass('d-none');
                    alert('Ajax Error');
                })
        } else {
            $('#kota').html('<option value="">-- Pilih  Kota --</option>');
        }
    })
}

const searchCity = object => {
    const { cities } = object;

    let options = '<option value="">-- Pilih  Kota --</option>';

    for (let row of cities) {
        options += `<option value="${row.id}">${row.name}</option>`;
    }

    $('#kota').html(options);
    
    $('#kota').on('change', () => {
        if ($('#kota').val()) {
            $('#type').html(`<option value="">-- Pilih Jenis Layanan --</option>
                                <option value="1">-- Covid --</option>
                                <option value="2">-- Non Covid --</option> `);
            
            searchHospital();

        } else {
            $('#type').html('<option value="">-- Pilih Jenis Layanan --</option>');
        }
    })
    
}

const searchHospital = () => {

    $('#type').on('change', () => {
        if ($('#type').val()) {

            $('.loader').toggleClass('d-none');

            fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${$('#props').val()}&cityid=${$('#kota').val()}&type=${$('#type').val()}`)
                .then(response => response.json())
                .then(responseJson => {
                    detailHospital(responseJson.hospitals);
                    $('.loader').toggleClass('d-none');
                })
                .catch(error => {
                    console.log(error);
                    $('.loader').toggleClass('d-none');
                    alert('Ajax Error');
                })
            
        } else {
            $('#rs').html('<option value="">-- Pilih  Rumah Sakit --</option>');
        }
    })
}

const detailHospital = data => {

    let options = '<option value="">-- Pilih  Rumah Sakit --</option>';

    for (let row of data) {
        options += `<option value="${row.id}">${row.name}</option>`
    }

    $('#rs').html(options);

    $('#rs').on('change', () => {

        $('.loader').toggleClass('d-none');

        fetch(`https://rs-bed-covid-api.vercel.app/api/get-bed-detail?hospitalid=${$('#rs').val()}&type=${$('#type').val()}`)
            .then(response => response.json())
            .then(responseJson => {
                viewHospital(responseJson.data);
                $('.loader').toggleClass('d-none');
            })
            .catch(err => {
                console.log(err);
                $('.loader').toggleClass('d-none');
                alert('Ajax Error');
            })
    })

}

const viewHospital = object => {
    const { id, name, address, phone, bedDetail } = object;
    const mapsRS = document.querySelector('#maps a');

    $('#title span').text(name);
    $('#adress span').text(address);
    $('#phone span').text(phone);

    $('.loader').toggleClass('d-none');

    fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospital-map?hospitalid=${id}`)
        .then(response => response.json())
        .then(responseJson => {
            mapsRS.setAttribute('href', responseJson.data.gmaps);
            $('.loader').toggleClass('d-none');
        })
        .catch(err => {
            console.log(err);
            $('.loader').toggleClass('d-none');
            alert('Ajax Error');
        })

    let kamarDetail = '';

    for (let row of bedDetail) {
        kamarDetail += `
            <tr>
                <td>${row.stats.title}</td>
                <td>${row.stats.bed_available}</td>
                <td>${row.stats.bed_empty}</td>
                <td>${row.stats.queue}</td>
                <td>${row.time}</td>
            </tr>
        `
    }

    $('.bed-rest tbody').html(kamarDetail);
    
}

export default hospital;