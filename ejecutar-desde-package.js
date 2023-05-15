const moment = require('moment-timezone');

const identity = 'cv-dt1-20230515-1'

const year = identity.split('-')[2].substring(0, 4);
const month = identity.split('-')[2].substring(4, 6);
const day = identity.split('-')[2].substring(6, 8);


const currentDate = moment.tz('America/Bogota');
const angelesDate = moment.tz('America/Mexico_City');
const finalRloDate = moment.utc([+year, +month - 1, +day, 12, 0, 0, 0]).toISOString();

console.log("Hora de Bogota: ",currentDate)
console.log("Hora de Mexico: ",angelesDate)
console.log("Hora del Release: ", finalRloDate)

if (currentDate.isSameOrBefore(finalRloDate, 'day')) {
    console.log('El dia de Bogota corresponde al dia del Release')
} 