const { getLugarLatLong } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (direccion) => {

    try {
        const { latitud, longitud } = await getLugarLatLong(direccion);
        const temp = await getClima(latitud, longitud)
        return `El clima de ${direccion} es de ${temp}`
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`
    }

};

getInfo(argv.direccion).then(console.log)
                       .catch(console.log);

