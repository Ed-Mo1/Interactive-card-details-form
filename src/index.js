const cardName = document.querySelector("#name");

const cardNumber = document.querySelector("#account-num");

const secCode = document.querySelector("#sec-code");

const monthExp = document.querySelector(`#mm`);

const yearExp = document.querySelector(`#yy`);

document.forms[0].onsubmit = (e) => {
  document.querySelectorAll("input").forEach((el) => {
    el.value = el.value.trim();
  });
  if (/[0-9]/.test(cardName.value)) {
    e.preventDefault();
    errorMsg(cardName);
  }
  if (cardName.value.length < 1) {
    errorMsg(cardName);
    e.preventDefault();
  }

  if (cardNumber.value.length < 1) {
    e.preventDefault();
    errorMsg(cardNumber);
  }
  if (/[a-z]/i.test(cardNumber.value) || cardNumber.value.length != 19) {
    e.preventDefault();
    errorMsg(cardNumber);
  }
  if (monthExp.value == "") {
    e.preventDefault();
    errorMsg(monthExp);
  } else if (!(/\d{2}/.test(monthExp.value) && monthExp.value <= 12)) {
    e.preventDefault();
    errorMsg(monthExp);
  }
  if (yearExp.value == "") {
    e.preventDefault();
    errorMsg(yearExp);
  } else if (
    !(
      /\d{2}/.test(monthExp.value) &&
      yearExp.value >= new Date().getFullYear().toString().slice(-2)
    )
  ) {
    e.preventDefault();
    errorMsg(yearExp);
  }
  if (secCode.value == "") {
    e.preventDefault();
    errorMsg(secCode);
  } else if (!/\d{3}/.test(secCode.value)) {
    e.preventDefault();
    errorMsg(secCode);
  }
};

cardName.addEventListener("input", function () {
  this.value = this.value.toUpperCase();
  document.querySelector(`#card-owner`).textContent =
    this.value.trim() || "Jane Appleseed";
  removeMsg(cardName);
});

cardNumber.addEventListener("input", function () {
  removeMsg(cardNumber);
  const regex = /(\w{4})$/;
  this.value = this.value.replace(regex, "$1 ");
  if (this.value == " ") {
    this.value = "";
  }

  document.querySelector("#first-four").textContent =
    this.value.slice(0, 4) || "0000";
  document.querySelector("#seconde-four").textContent =
    this.value.slice(4, 9) || "0000";
  document.querySelector("#third-four").textContent =
    this.value.slice(9, 14) || "0000";
  document.querySelector("#fourth-four").textContent =
    this.value.slice(14, 19) || "0000";
});

monthExp.addEventListener("input", function () {
  removeMsg(monthExp);

  this.value = this.value.trim();
  document.querySelector("#month").textContent = this.value || "00";
});

yearExp.addEventListener("input", function () {
  removeMsg(yearExp);

  this.value = this.value.trim();
  document.querySelector("#year").textContent = this.value || "00";
});

secCode.addEventListener("input", function () {
  this.value = this.value.trim();
  removeMsg(secCode);
  document.querySelector("#security-code").textContent = this.value || "000";
});

function errorMsg(input) {
  let msg = document.createElement("span");
  msg.textContent = "wrong format";
  msg.classList.add("text-danger");
  msg.style.cssText = `
  position: absolute !important; 
  bottom: -20px;
  font-size: 12px;`;

  if (input.value == "") {
    msg.textContent = "can not be blank";
  } else if (input.id == "account-num") {
    msg.textContent = "wrong format, numbers only";
  }
  input.classList.add("border-danger");
  if (input.parentNode.lastElementChild.nodeName !== "SPAN") {
    input.parentNode.append(msg);
  }
}

function removeMsg(input) {
  input.classList.remove("border-danger");
  if (input.parentNode.lastElementChild.nodeName === "SPAN") {
    input.parentNode.lastChild.remove();
  }
}

ScrollReveal().reveal(".card", {
  duration: 1500,
  interval: 500,
  origin: "left",
  distance: "2000px",
});

ScrollReveal().reveal("form", {
  delay: 1000,
  duration: 1500,
  origin: "right",
  distance: "2000px",
});
