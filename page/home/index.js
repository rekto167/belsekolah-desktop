const axios = require('axios');
const moment = require('moment');
const selectInput = document.getElementById('selectInput');
const dateNow = document.getElementById('dateNow');

let date = new Date();
moment.locale('id');
dateNow.innerHTML = moment().format('LLLL');

selectInput.addEventListener('change', function(){
    console.log(selectInput.value);
})