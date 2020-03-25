import Auth from './auth.js';

const myAuth = new Auth();

const loginForm = document.getElementById('login');
loginForm.querySelector('button').addEventListener('click', () => {
  myAuth.login(getPosts);
});

async function getPosts() {
    const data = await makeRequest('posts', 'GET', null, myAuth.token);
    document.getElementById('content').classList.remove('hidden');
    console.log(data);
    var ul = document.getElementById('list');
    ul.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data[i].title));
      ul.appendChild(li);
    }
  } 

