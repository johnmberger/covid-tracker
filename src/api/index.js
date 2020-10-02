import axios from 'axios';

export default {
  getLatest() {
    return axios.get('https://api.covidtracking.com/v1/us/current.json');
  },
  getTodaysStats() {
    const now = new Date();
    const [y, m, d] = [
      now.getFullYear(),
      now
        .getMonth()
        .toString()
        .padStart(2, '0'),
      now
        .getDay()
        .toString()
        .padStart(2, '0')
    ];
    return axios.get(`https://api.covidtracking.com/v1/us/${y}${d}${m}.json`);
  }
};
