//https://api.covid19api.com/
// https://api.covid19api.com/summary'
 
 

fetch(`https://api.covid19api.com/summary`).then((impData) => {
    console.log(impData);
    return impData.json();
}).then((actualData) => {
    console.log(actualData);
    console.log(actualData.Global.NewConfirmed);
    console.log(actualData.Global.NewDeaths);

    /*
    console.log(actualData.Countries);
    console.log(actualData.Countries[76]);
    console.log(actualData.Countries[76].NewConfirmed);
    console.log(actualData.Countries[76].NewDeaths);
    console.log(actualData.Countries[76].NewRecovered);

    NewConfirmed: 436868
NewDeaths: 901
NewRecovered: 0
TotalConfirmed: 536635587
TotalDeaths: 6310843
TotalRecovered: 0

    console.log(actualData.Countries[76].TotalConfirmed);
    console.log(actualData.Countries[76].TotalDeaths);
    console.log(actualData.Countries[76].TotalRecovered);
*/
    const countryData = 'Global';

    const nconfirmData = actualData.Global.NewConfirmed;

    const ndeathsData = actualData.Global.NewDeaths;

    const nrecoveredData =  actualData.Global.TotalRecovered;
    

    document.getElementById('country').innerHTML = countryData;
    document.getElementById('nconfirmed').innerHTML = nconfirmData;
    document.getElementById('ndeaths').innerHTML = ndeathsData;
    document.getElementById('nrecovered').innerHTML = nrecoveredData;



}).catch((err)=>{
   console.log("plz correct");
});



























