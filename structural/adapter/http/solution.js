import http from './http.js';
import HttpAdapter from './http-adapter.js';
import Repository from './repository.js';

const HttpAdapter = new HttpAdapter(http);
const courseRepo = new Repository('https://code.ru', 'courses', HttpAdapter);

courseRepo.getAll()
    .then(courses => console.log(courses));