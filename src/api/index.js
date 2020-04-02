import axios from 'axios';

export default {
  getLatest() {
    return axios.get('https://covidtracking.com/api/us');
  },
  getTodaysStats() {
    return axios.get('https://covidtracking.com/api/us/daily');
  }
};
