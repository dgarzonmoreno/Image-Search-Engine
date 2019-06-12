import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: 
        'Client-ID 975a49bb91aa7ba5a387d8a8c5397ad2741c1ca334eb5e14d7460bc308e977df'
    },
    baseURL:  'https://api.unsplash.com'
});