// 简单的用axios demo

const axios = require('axios');

// import axios from 'axios'



/* const instance = axios.create({
    baseURL: 'http://localhost:8080',
});

instance.get('/hi').then((res) => {console.log(res.data)}) */
    
function get() {
    axios.get('http://localhost:8080/hi')
        .then((val) => {
            console.log(val.data)
        })
}

get()