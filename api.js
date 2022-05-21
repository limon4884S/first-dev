// search json placeholder to take fetch. fetch mane data tene nia asha

function loadData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    // .then(json => console.log(json.title))
}
function userData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data));
  //.then(json => console.log(json))
    // .then(json => console.log(json.title))
}

function displayUsers(data) {
  const ul = document.getElementById('users');
  for (const user of data) {
    const li = document.createElement('li');
    li.innerText = `name: user.name;`
    //li.innerText = user.name;
    ul.appendChild(li);
  }
}
