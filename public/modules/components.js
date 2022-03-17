const nav = document.querySelector(".navbar");
fetch("modules/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

const links = document.querySelector(".bs_links");
fetch("modules/bs_links.html")
  .then((res) => res.text())
  .then((data) => {
    links.innerHTML = data;
  });
