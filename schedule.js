const axios = require('axios');
const selectHari = document.getElementById('selectHari');
const selectAktifitas = document.getElementById('selectAktifitas');
let waktu = document.getElementById('waktu');
const modalTambahJadwal = document.getElementById('modalTambahJadwal');
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

btnSimpan.addEventListener('click', async ()=>{
    console.log(selectHari.value);
    console.log(selectAktifitas.value);
    console.log(waktu.value);
    const body  = {
        'day_id': selectHari.value,
        'activity_id': selectAktifitas.value,
        'time': waktu.value
    }
    const res = await axios.post('http://127.0.0.1:8000/api/schedule/store', body);
    console.log(res.data);
});