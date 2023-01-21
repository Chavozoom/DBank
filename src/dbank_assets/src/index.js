import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async() =>{
  update();  
});

document.querySelector("form").addEventListener("submit", async() =>{
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  button.setAttribute("disabled", true);

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  if(!isNaN(inputAmount)){
    await dbank.topUp(inputAmount);
  }

  if(!isNaN(outputAmount)){
    await dbank.withdraw(outputAmount);
    }
  
  document.getElementById("withdrawal-amount").value = "";
  document.getElementById("input-amount").value = "";
  button.removeAttribute("disabled");

  update();
});

const update = async() =>{
  const currentAmout = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmout * 100) /100;
}