const axios = require('axios')

async function getString() {
    try {
      const response =  axios.get('http://localhost:8080/hi');
    //   const response = await axios.get('http://localhost:8080/hi');
      console.log(response);
      console.log(2)
    } catch (error) {
      console.error(error);
    }
}


getString()
console.log(1)