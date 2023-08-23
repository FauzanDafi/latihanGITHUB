function tambah() {
  const num1 = parseFloat(document.getElementById("sum3").value);
  const num2 = parseFloat(document.getElementById("sum4").value);
  const hasil = num1 + num2;
  document.getElementById("result").textContent = hasil;
  alert("telah menambahkan");
}

function kurang() {
  const num1 = parseFloat(document.getElementById("sum3").value);
  const num2 = parseFloat(document.getElementById("sum4").value);
  const hasil = num1 - num2;
  document.getElementById("result").textContent = hasil;
  alert("telah mengurangkan");
}

function kali() {
  const num1 = parseFloat(document.getElementById("sum3").value);
  const num2 = parseFloat(document.getElementById("sum4").value);
  const hasil = num1 * num2;
  document.getElementById("result").textContent = hasil;
  alert("telah mengalikan");
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
