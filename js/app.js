let sortingHat;

function totalChildrenEntered() {
    let houseNames = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
    let totalAllowedInHouse = document.getElementById('numberOfChildren').value / houseNames.length;
    totalAllowedInHouse = Math.ceil(totalAllowedInHouse);
    document.getElementById("totalChildrenSetup").hidden = true;
    sortingHat = new SortingHat(houseNames, totalAllowedInHouse);
    addTheadRow(houseNames);

    for (let i = 0; i < totalAllowedInHouse; i++) {
        addBlankRowToTable(houseNames.length);
    }
}

function childNameEntered() {
    let childName = document.getElementById('name').value
    let house = sortingHat.allocateChildToRandomHouse(childName);
    updateCell(childName, house.houseNumber, house.children.length);
}

function addTheadRow(houseNames) {
    let table = document.getElementById("table");
    let header = table.createTHead();
    let newRow = header.insertRow(0);
    let j = 0;

    houseNames.forEach((item, index) =>{
        let cell = newRow.insertCell(index);
        cell.innerHTML = item;
    });
}

function addBlankRowToTable(numberOrColumns) {
    let table = document.getElementById("table");
    let newRow = table.insertRow(table.length);

    for (let j = 0; j < numberOrColumns; j++) {
        let cell = newRow.insertCell(j);
        cell.innerHTML = "";
    }
}

function updateCell(value, i, j) {
    let table = document.getElementById("table");
    let row = table.rows[j];
    let cell = row.cells[i];
    cell.innerHTML = value;
}