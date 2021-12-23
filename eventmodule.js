
const School = require('./school');
const school = new School();

//Resister a lisitenar for bellRing




school.on('bellRing', ({period,text}) => {
    console.log(`we need to Run....${period} ${text}`);
});
school.startPeriod();