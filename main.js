const bill = document.getElementById("bill");
const btn = document.querySelectorAll(".b");
const custom = document.getElementById("custom");
const people_num = document.getElementById("people_num");
const tip_amount = document.getElementById("tip_amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");


btn.forEach((button)=> {
  button.addEventListener('click', (e) =>{
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);
if(bill.value === "")return;
if(people_num.value === "")people_num.value = 1;
calculate(
parseFloat(tipvalue),
parseFloat(bill.value),
parseFloat(people_num.value)
);
});
} );
//


custom.addEventListener("blur", (e) => {
    if (bill.value === "") {
        resetEverything();
        return;
      }  
      if (people_num.value === "") people_num.value = 1;

      calculate(
        parseFloat(bill.value),
        parseFloat(e.target.value),
        parseInt(people_num.value)
      );
});
  //


  function calculate(bill, t, people_num) {
    let tipAmount = (bill * (t / 100)) / people_num;
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);
  
    let totalAmount = (tipAmount * people_num + bill) / people_num;
    totalAmount = totalAmount.toFixed(2);
  
    tip_amount.innerHTML = `$${tip}`;
    total.innerHTML = `$${totalAmount}`;
  }
  
  //

  reset.addEventListener("click", resetEverything);
function resetEverything() {
  tip_amount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  bill.value = "";
  people_num.value = "";
  custom.value = "";
}