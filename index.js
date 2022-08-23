const axios = require('axios');
const selectInput = document.getElementById('selectInput');

selectInput.addEventListener('change', function(){
    console.log(selectInput.value);
})