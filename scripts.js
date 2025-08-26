let callHistory = [];

// hearts counter
let heartsClickedCount = 0;
const hearts = document.getElementsByClassName("fa-heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartsClickedCount++;
    document.getElementById("heart-count").innerText = heartsClickedCount;
  });
}

// call button click
const callButtons = document.getElementsByClassName("btn-call");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    const coins = parseInt(document.getElementById("coin-amount").innerText);

    if (coins >= 20) {
      document.getElementById("coin-amount").innerText = coins - 20;
      const parentDiv = this.parentElement.parentElement;
      const serviceName = parentDiv.querySelector("h1");
      const serviceNumber = parentDiv.querySelector("h2");

      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      const callHistoryObj = {
        name: serviceName.innerText,
        number: serviceNumber.innerText,
        date: now.toLocaleTimeString([], options).toUpperCase(),
      };
      callHistory.push(callHistoryObj);

      // adding child to call history
      document.getElementById("call-history-content").innerHTML = "";
      for (const call of callHistory) {
        const div = document.createElement("div");
        div.classList.add("w-full", "flex", "items-center", "justify-between", "mb-[8px]", "bg-[#FAFAFA]")
        div.innerHTML = `
            <div>
              <h1 class="text-[18px] font-bold">${call.name}</h1>
              <p class="text-[18px]">${call.number}</p>
            </div>
            <div>
              <h1 class="text-[18px]">${call.date}</h1>
            </div>
        `;
        document.getElementById("call-history-content").appendChild(div);
      }

      alert(
        "Calling to: " + serviceName.innerText + " - " + serviceNumber.innerText
      );
    } else {
      alert("Alert! You coin is less than 20");
    }
  });
}


// clear button feature 
document.getElementById("btn-clear").addEventListener("click", function () {
  document.getElementById("call-history-content").innerHTML = "";
  callHistory = [];
})
