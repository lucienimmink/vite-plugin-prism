/// <reference types="vite/client" />

fetch(window.location.origin + "/api/pets")
  .then((res) => res.json())
  .then((json) => {
    const $app = document.getElementById("app");
    if ($app) {
      $app.textContent = JSON.stringify(json, null, 2);
    }
  });
