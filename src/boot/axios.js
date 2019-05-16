import axios from 'axios'

const HEROKUclientOpen = axios.create({
  baseURL: 'https://labsolos-backend-api.herokuapp.com/oapi',
  timeout: 30000,
  headers: {
    // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json'
    // ,
    // 'Cache-Control': 'no-cache'
    // 'Pragma': 'no-cache'
  }
})

const HEROKUclient = axios.create({
  baseURL: 'https://labsolos-backend-api.herokuapp.com/api',
  timeout: 30000,
  headers: {
    'Authorization': localStorage.getItem('token'),
    'Content-Type': 'application/json'
    // ,
    // 'Cache-Control': 'no-cache'
    // 'Pragma': 'no-cache'
  }
})

export {
  HEROKUclientOpen,
  HEROKUclient
}
