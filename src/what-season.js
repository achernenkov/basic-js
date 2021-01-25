const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if(date === undefined){
        return 'Unable to determine the time of year!'
    }

    if(date && !date.getMonth() && date.getMonth() !== 0) {
        throw Error;
    }

    try {
        date.getUTCDate();
    }
    catch(error) {
        throw Error;
    }


    let result

        switch (date.getMonth()){
            case 11 :
                result = 'winter'
                break
            case 0 :
                result = 'winter'
                break
            case 1 :
                result = 'winter'
                break
            case 2 :
                result = 'spring'
                break
            case 3 :
                result = 'spring'
                break
            case 4 :
                result = 'spring'
                break
            case 5 :
                result = 'summer'
                break
            case 6 :
                result = 'summer'
                break
            case 7 :
                result = 'summer'
                break
            case 8 :
                result = 'autumn'
                break
            case 9 :
                result = 'autumn'
                break
            case 10 :
                result = 'autumn'
                break
        }


    return result

};
