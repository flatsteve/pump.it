// API Key 38a1453c219f5cb5949dd2dc8a1a4344b269330c
const API = 'https://wger.de/api/v2/';

export async function getCategories() {
  return new Promise(
    function (resolve, reject) {
      fetch(`${API}exercisecategory`)
        .then((response) => {
          response.json().then((data) => {
            resolve(data.results);
          });
        })
        .catch(function (error) {
          reject(error);
        });
    });
}

export async function search(searchTerm, categoryId) {
  return new Promise(
    function (resolve, reject) {
      fetch(`${API}exercise/search/?term=${searchTerm}&category=${categoryId}`)
        .then((response) => {
          response.json().then((data) => {
            resolve(data.suggestions);
          });
        })
        .catch(function (error) {
          reject(error);
        });
    });
};