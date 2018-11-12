export function get(e) {
  return new Promise(function(resolve, reject) {
    fetch(e)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

export function post(e, i) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      fetch(e, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(i)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    }, 5000);
  });
}
