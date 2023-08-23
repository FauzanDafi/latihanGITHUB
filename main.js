function tambah() {
  const num1 = parseFloat(document.getElementById("sum3").value);
  const num2 = parseFloat(document.getElementById("sum4").value);
  const hasil = num1 + num2;
  document.getElementById("result").textContent = hasil;
}

function kurang() {
  const num1 = parseFloat(document.getElementById("sum3").value);
  const num2 = parseFloat(document.getElementById("sum4").value);
  const hasil = num1 - num2;
  document.getElementById("result").textContent = hasil;
}

function kali() {
  const num1 = parseFloat(document.getElementById("sum3").value);
  const num2 = parseFloat(document.getElementById("sum4").value);
  const hasil = num1 * num2;
  document.getElementById("result").textContent = hasil;
}

function bagi() {
  const num1 = parseFloat(document.getElementById("sum3").value);
  const num2 = parseFloat(document.getElementById("sum4").value);
  if (num2 !== 0) {
    const hasil = num1 / num2;
    document.getElementById("result").textContent = hasil;
  } else {
    document.getElementById("result").textContent =
      "tidak dapat dibagi dengan 0";
  }
}
