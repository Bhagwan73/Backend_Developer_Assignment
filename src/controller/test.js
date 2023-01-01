
let obj={
    "date":"1st June",
    "isAvalaible":true,
    "availableVaccines":{
    "10:00 PM to 10:30 PM":{
        "vaccineDoses":0,
        "isBooked":false
    },
     "10:30 AM to 11:00 AM":{
         "vaccineDoses":0,
        "isBooked":false
      },
      "11:00 AM to 11:30 AM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "11:30 AM to 12:00 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "12:00 PM to 12:30 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "12:30 PM to 01:00 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "01:00 PM to 01:30 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "01:30 PM to 02:00 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "02:00 PM to 02:30 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "02:30 PM to 03:00 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "03:00 PM to 03:30 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "03:30 PM to 04:00 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "04:00 PM to 04:30 PM":{
        "vaccineDoses":0,
        "isBooked":false
     },
     "04:30 PM to 05:00 PM":{
        "vaccineDoses":0,
        "isBooked":false
     }
    }
}

const {availableVaccines}=obj
console.log(Object.keys(availableVaccines).length)