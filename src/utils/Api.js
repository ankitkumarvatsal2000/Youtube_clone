

import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '29f974b6eamsh8c301d7d380b56fp12658bjsn54b98c68f056',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }
  catch (error) {
    console.log("data is not comming")
  }
};