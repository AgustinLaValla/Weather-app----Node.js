const axios = require('axios').default;

const getLugarLatLong = async (direccion) => {
    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'd4d1e25345mshab0df234386cc8ep160d11jsnd1bd29e6bc53' }
    });

    const resp = await instance.get();
    if(resp.data.Results.length === 0) { 
        throw new Error(`NO HAY RESULTADOS PARA ${direccion}`)
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const latitud = data.lat;
    const longitud = data.lon;


    return { 
        location,
        latitud,
        longitud
    }

};

module.exports = { 
    getLugarLatLong
};