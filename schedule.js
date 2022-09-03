const axios = require('axios');
const selectHari = document.getElementById('selectHari');
const selectAktifitas = document.getElementById('selectAktifitas');
const btnSimpan = document.getElementById('btnSimpan');
const tbhJadwal = document.getElementById('tbhJadwal');
const body = document.querySelector('body');
let days=[];
let activity=[];

window.addEventListener('load', ()=>{
    getDay();
    getActivity();
})

const getDay = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/days');
    res.data.data[0].map( d => {
        days.push(d);
    });
    days.map(day => {
        let opt = document.createElement('option');
        opt.value=day.id;
        opt.innerHTML = day.name;
        selectHari.appendChild(opt);
    });
}

const getActivity = async()=>{
    const res = await axios.get('http://127.0.0.1:8000/api/activity');
    let a = res.data.data[0];
    a.map(e => {
        activity.push(e);
    })
    activity.map(e=>{
        let opt = document.createElement('option');
        opt.value = e.id;
        opt.innerHTML = e.activity;
        selectAktifitas.appendChild(opt);
    })
}

btnSimpan.addEventListener('click', ()=>{
    console.log(selectHari.value);
    console.log(selectAktifitas.value);
})