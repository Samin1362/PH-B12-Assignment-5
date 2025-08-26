

// hearts counter
let heartsClickedCount = 0;
const hearts = document.getElementsByClassName("fa-heart");
for (const heart of hearts){
  heart.addEventListener("click", function () {
    heartsClickedCount++;
    document.getElementById("heart-count").innerText = heartsClickedCount;
  })
}
