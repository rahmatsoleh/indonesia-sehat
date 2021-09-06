import 'jquery';

const vaksinasi = data => {
    const { totalsasaran, vaksinasi1, vaksinasi2, lastUpdate } = data;

    $('.total-sasaran h1').text(convertDesimal(totalsasaran));
    $('.total-sasaran p').html(`<em>Update pada ${lastUpdate.slice(0, 10)} ${lastUpdate.slice(11, 19)}</em>`);
    $('.vaksin-1 h1').text(convertDesimal(vaksinasi1));
    $('.vaksin-2 h1').text(convertDesimal(vaksinasi2));
    
}

const convertDesimal = number => number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export default vaksinasi;
