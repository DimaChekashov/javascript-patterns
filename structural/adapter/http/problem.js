import http from './http.js';
import Repository from './repository.js';

const courseRepo = new Repository('https://code.ru', 'courses', http);

courseRepo.getAll()
  .then(courses => console.log(courses));