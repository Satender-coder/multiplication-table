let x;

document.getElementById("number").addEventListener("change", () => {
  x = document.getElementById("number").value;
});

function generateTable() {
  let putData = document.getElementById("result");

  for (i = 1; i <= 10; i++) {
    putData.innerHTML += `${x} x ${i} = ${x * i}<br>`;
  }
}

function resetTable() {
  // window.location.reload();

  document.getElementById("number").value = "";
  document.getElementById("result").innerHTML = "";
}
