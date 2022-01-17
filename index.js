
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
    //if i put minus it is gonna start from the back
    // and it goes until the end 
}

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 //I can put a varible inside of an array

function createFareMultiplier(price){
    return function (multiplier){
        return multiplier * price
    }
}
 
 const fareDoubler = function (fare){
     return createFareMultiplier(fare)(2)
 }

 const fareTripler = function(fare){
    return createFareMultiplier(fare)(3)
 }

 function selectDifferentDrivers(drivers, selectFunction){
     return selectFunction(drivers)
 }