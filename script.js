const count = document.querySelector("#count");
const increasementBtn = document.querySelector("#increasement");
const saveBtn = document.querySelector("#save");
const previousEntries = document.querySelector("#previous");

increasementBtn.textContent =  "Increasement";
saveBtn.textContent = "Save";

increasementBtn.addEventListener("click", function () {
    count.textContent = Number(count.textContent) + 1  
})

 
  
saveBtn.addEventListener("click", function () {
    const savedCounts = JSON.parse(localStorage.getItem("counts")) || []
    savedCounts.push(count.textContent);
    localStorage.setItem("counts", JSON.stringify(savedCounts));

    displayEntries()
})

function displayEntries() {
    previousEntries.textContent = ""

    const savedCounts = JSON.parse(localStorage.getItem("counts")) || [];

    savedCounts.forEach(function (savedCount) {
        const li = document.createElement("li");

        li.textContent = savedCount;
        previousEntries.appendChild(li)
    })
}

displayEntries()
