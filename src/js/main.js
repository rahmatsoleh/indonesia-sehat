import DataSource from "./ajax";
import vaksinasi from "./vaksinasi";
import hospital from "./hospital";
import { covidProvinsi, covid } from "./covid";

const main = () => {
    
    const viewDataVaksin = new DataSource('https://vaksincovid19-api.vercel.app/api/vaksin', vaksinasi);
    viewDataVaksin.searchData();

    const viewDataCovid = new DataSource('https://apicovid19indonesia-v2.vercel.app/api/indonesia/more', covid);
    viewDataCovid.searchData();

    const dataCovidProvinsi = new DataSource('https://indonesia-covid-19.mathdro.id/api/provinsi/', covidProvinsi);
    dataCovidProvinsi.searchData();

    const dataRumahSakit = new DataSource('https://rs-bed-covid-api.vercel.app/api/get-provinces', hospital);
    dataRumahSakit.searchData();
};

export default main;