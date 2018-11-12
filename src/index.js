import { get, post } from "./app";

get("https://jsonplaceholder.typicode.com/posts")
  .then(one => console.log(one))
  .catch(err => console.log(err));

const data = {
  title: "one",
  body: "two"
};

post("https://jsonplaceholder.typicode.com/posts", data)
  .then(one => {
    const showOnWindow = JSON.stringify(one);
    console.log(one);
    document.getElementById("app").innerHTML = showOnWindow;
  })
  .catch(err => console.log(err));
