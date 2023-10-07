document.getElementById("Submit").onclick = (e) => {
  e.preventDefault();
  let temp;
  if (document.getElementById("Celsi").checked) {
    temp = document.getElementById("input").value;
    temp = Number(temp);
    temp = isCelsius(temp);
    document.getElementById("Output").innerHTML = temp + "°C";
  } else if (document.getElementById("Fahren").checked) {
    temp = document.getElementById("input").value;
    temp = Number(temp);
    temp = isFahren(temp);
    document.getElementById("Output").innerHTML = temp + "°F";
  } else {
    document.getElementById("Output").innerHTML = "Please enter any numbers...";
  }
};
const isCelsius = (temp) => {
  return (temp - 32) * (5 / 9);
};
const isFahren = (temp) => {
  return (temp * 9) / 5 + 32;
};
