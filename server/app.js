import axios from "axios";
import express, { request } from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Example app listening on port 3000')
  })

const url = ('https://rata.digitraffic.fi/api/v1/live-trains/station/HKI')

const res = await axios.get(url, { 
    headers: {
        'Content-Type': 'application/json','Accept-Encoding': 'gzip'
    }});

app.get('/hello', (request, response) => {
    response.send(res)
})
    
// console.log(res)