"use strict";

const socials = [...document.querySelectorAll(".socials")];
socials.forEach((social) => {
  let url = social.dataset.url;
  social.onclick = () => {
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  };
});
