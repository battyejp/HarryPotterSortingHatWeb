let houseTotals = [0, 0, 0, 0];
// let houseNumber = "";
let totalInHouse = "";
let hufflepuffs = [];
let slytherins = [];
let ravenclaws = [];
let gryffindors = [];

function clickOKNumber() {
  totalInHouse = document.getElementById('numberOfBeavers').value / 4;
  totalInHouse = Math.ceil(totalInHouse);
}

function IsHouseFull(houseNumber) {
  // if (houseTotals[houseNumber] < totalInHouse) {
  //   return true;S
  // }
  // else {
  //   return false;
  // }
  return houseTotals[houseNumber] < totalInHouse;
}

function addtohouse(houseNumber) {
  houseTotals[houseNumber - 1] += 1;
}

function resetName() {
  document.getElementById("name").value = "";
}

function allocateHouse(houseName, houseArray, houseId, nameInput) {
  console.log(houseName);
  document.getElementById("result").innerHTML = nameInput + " you are in " + houseName + " house";
  houseArray.push(nameInput);
  document.getElementById(houseId).innerHTML = houseArray.join('</p> <p>');
  resetName();
}

function clickOK() {
  let nameInput = document.getElementById('name').value;
  do {
    let houseNumber = Math.floor(Math.random() * 4) + 1;
    console.log(houseNumber);
    IsHouseFull()
    addtohouse(houseNumber);
    console.log(houseTotals);

    if (houseNumber === 1) {
      allocateHouse("Hufflepuff", hufflepuffs, "Hufflepuffs", nameInput);
      // console.log("Hufflepuff");
      // document.getElementById("result").innerHTML = nameInput + " you are in Hufflepuff house";
      // hufflepuffs.push(nameInput);
      // document.getElementById("Hufflepuffs").innerHTML = hufflepuffs.join('</p> <p>');
      // resetName();
    }
    else if (houseNumber === 2) {
      allocateHouse("Ravenclaw", ravenclaws, "Ravenclaws", nameInput);
      // console.log("Ravenclaw");
      // document.getElementById("result").innerHTML = nameInput + " you are in Ravenclaw house";
      // ravenclaws.push(nameInput);
      // document.getElementById("Ravenclaws").innerHTML = ravenclaws.join('</p> <p>');
      // resetName();
    }

    else if (houseNumber === 3) {
      console.log("Slytherin");
      document.getElementById("result").innerHTML = nameInput + " you are in Slytherin house";
      slytherins.push(nameInput);
      document.getElementById("Slytherins").innerHTML = slytherins.join('</p> <p>');
      resetName();
    }
    else {
      console.log("Gryffindor");
      document.getElementById("result").innerHTML = nameInput + " you are in Gryffindor house";
      // gryffindors.push(nameInput);
      // document.getElementById("Gryffindors").innerHTML = gryffindors.join('</p> <p>');
      let x = document.createElement("TD");
      let t = document.createTextNode(nameInput);
      x.appendChild(t);
      document.getElementById("Gryffindors").appendChild(x);
      resetName();
    }
    break
  }
  while (true);
}

