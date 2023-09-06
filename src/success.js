let owner = location.href.slice(
  location.href.indexOf("card-owner") + 11,
  location.href.indexOf("&card-num")
);

owner = owner.split("+").join(" ");

let cardNum = location.href.slice(
  location.href.indexOf("card-num") + 9,
  location.href.indexOf("&month-exp")
);

cardNum = cardNum.split("+").join(" ").trim();

const monthExp = location.href.slice(
  location.href.indexOf("month-exp") + 10,
  location.href.indexOf("&year-exp")
);

const yearExp = location.href.slice(
  location.href.indexOf("year-exp") + 9,
  location.href.indexOf("&cvc")
);

const cvc = location.href.slice(location.href.indexOf("cvc") + 4);

console.log(yearExp);
document.querySelector("#card-owner").textContent = owner;
document.querySelector("#first-four").textContent = cardNum.slice(0, 4);
document.querySelector("#seconde-four").textContent = cardNum.slice(4, 9);
document.querySelector("#third-four").textContent = cardNum.slice(9, 14);
document.querySelector("#fourth-four").textContent = cardNum.slice(14, 19);

document.querySelector("#month").textContent = monthExp;

document.querySelector("#year").textContent = yearExp;

document.querySelector("#security-code").textContent = cvc;
