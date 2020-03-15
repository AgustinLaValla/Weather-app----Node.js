const axios = require('axios').default;

const getClima = async (lat, lon) => {
    console.log({lat:lat, lon:lon})
    const apiKey = '73797fb8f16450aa047e80771c4c86d8';
    const wheatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ apiKey }&units=metric` 
    const resp = await axios.get(wheatherUrl);
    return  resp.data.main.temp
}

module.exports = { 
    getClima
};