let houseTotals = [0, 0, 0, 0];
let totalInHouse = "";
let hufflepuffs = [];
let slytherins = [];
let ravenclaws = [];
let gryffindors = [];
let houseNumber = "";
hideElements(false);

function hideElements(flag) {
  document.getElementById("toHide").hidden = flag;
}

function clickOKNumber() {
  totalInHouse = document.getElementById('numberOfBeavers').value / 4;
  totalInHouse = Math.ceil(totalInHouse);
  hideElements(true);
}

function isHouseFull(houseNumber) {
  // if (houseTotals[houseNumber] < totalInHouse) {
  //   return true;S
  // }
  // else {
  //   return false;
  // }
  return houseTotals[houseNumber - 1] == totalInHouse;
}

function addtohouse(houseNumber) {
  houseTotals[houseNumber - 1] += 1;
}

function resetName() {
  document.getElementById("name").value = "";
  result.hidden = true;
}

function addBlankRowToTable() {
  let table = document.getElementById("table");
  let newRow = table.insertRow(table.length);
  for (let j = 0; j < 4; j++) {
    let cell = newRow.insertCell(j);
    cell.innerHTML = "";
  }
}
// function PlaySound() {
//   var sound = document.getElementById("sound1");
//   sound.Play();
// }

function updateCell(value, i, j) {
  let table = document.getElementById("table");
  let row = table.rows[i];

  if (typeof row === 'undefined') {
    addBlankRowToTable();
    row = table.rows[i];
  }

  let cell = row.cells[j];
  cell.innerHTML = value;
}

function allocateHouse(houseName, houseArray, houseId, nameInput, houseNumber) {
  console.log(houseName);
  document.getElementById("result").innerHTML = "<div>" + nameInput + " you are in " + houseName + " house</div>";
  houseArray.push(nameInput);
  // document.getElementById(houseId).innerHTML = "<div>" + houseArray.join('</br>') + "</div>";
  updateCell(nameInput, houseArray.length, houseNumber);
  resetName();
  stall(houseName);
}

function playSound(sound1, houseName) {
  let audio = new Audio(sound1);
  audio.play();
  audio.addEventListener('ended', function () {
    let result = document.getElementById("result");
    result.classList.add("result");
    result.hidden = false;
    window.setTimeout(function () {
      let soundFile = houseName.toLowerCase() + '.wav';
      let audio = new Audio(soundFile);
      audio.play();
    }, 1000);
  });

}

function stall(houseName) {
  audioNumber = Math.floor(Math.random() * 5) + 1;
  if (audioNumber === 1) {
    playSound('ahright.wav', houseName);
  }
  else if (audioNumber === 2) {
    playSound('difficult.wav', houseName);
  }
  else if (audioNumber === 3) {
    playSound('itsallhere.wav', houseName);
  }
  else if (audioNumber === 4) {
    playSound('rightok.wav', houseName);
  }
  else {
    playSound('wheretoputyou.wav', houseName);
  }
}


function clickOK() {
  let nameInput = document.getElementById('name').value;

  do {
    houseNumber = Math.floor(Math.random() * 4) + 1;
    console.log(houseNumber);
  }
  while (isHouseFull(houseNumber))
  addtohouse(houseNumber);
  console.log(houseTotals);

  if (houseNumber === 1) {
    allocateHouse("Hufflepuff", hufflepuffs, "Hufflepuffs", nameInput, houseNumber - 1);

    // console.log("Hufflepuff");
    // document.getElementById("result").innerHTML = nameInput + " you are in Hufflepuff house";
    // hufflepuffs.push(nameInput);
    // document.getElementById("Hufflepuffs").innerHTML = hufflepuffs.join('</p> <p>');
    // resetName();
  }
  else if (houseNumber === 2) {
    allocateHouse("Ravenclaw", ravenclaws, "Ravenclaws", nameInput, houseNumber - 1);
  }

  else if (houseNumber === 3) {
    allocateHouse("Slytherin", slytherins, "Slytherins", nameInput, houseNumber - 1);
  }
  else {
    allocateHouse("Gryffindor", gryffindors, "Gryffindors", nameInput, houseNumber - 1);
  }
}

