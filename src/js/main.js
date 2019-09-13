"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const repositoriesList = document.querySelector('.repositories__list--js');

fetch('https://api.github.com/users/kamilbaczynski/repos?sort=updated')
  .then(data => data.json())
  .then(data => {

    const repos = data;

    for (const repo of repos) {
      repositoriesList.innerHTML += `<li><a href="${repo.html_url}">${repo.name}</a></li>`
    }

  })






















// fetch('https://api.github.com/users/kamilbaczynski/repos?sort=updated')
//   .then(data => data.json())
//   .then(data => {
//     const repos = data;
//     for (const repo of repos){

//       repositories.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;

//     }

//   })



