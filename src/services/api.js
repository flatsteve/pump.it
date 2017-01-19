const API = 'https://api.myjson.com/bins/vnkjn';

export async function saveState(state) {
  const requestHeaders = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  return new Promise(
    function (resolve, reject) {
      fetch(`${API}`, {
        method: 'PUT',
        body: JSON.stringify(state),
        headers: requestHeaders
      })
        .then((response) => {
          response.json().then((data) => {
            resolve(data);
          });
        })
        .catch(function (error) {
          reject(error);
        });
    });
}

export async function getState() {
  const requestHeaders = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  return new Promise(
    function (resolve, reject) {
      fetch(`${API}`)
        .then((response) => {
          response.json().then((data) => {
            resolve(data);
          });
        })
        .catch(function (error) {
          reject(error);
        });
    });
}
