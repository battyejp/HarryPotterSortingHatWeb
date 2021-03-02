let sortingHat;
let houseTable;

function totalChildrenEntered() {
    let houseNames = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
    let totalAllowedInHouse = document.getElementById('numberOfChildren').value / houseNames.length;
    totalAllowedInHouse = Math.ceil(totalAllowedInHouse);
    document.getElementById("totalChildrenSetup").hidden = true;
    sortingHat = new SortingHat(houseNames, totalAllowedInHouse);
    houseTable = new HouseTable(document.getElementById("table"));

    houseTable.addTheadRow(houseNames);

    for (let i = 0; i < totalAllowedInHouse; i++) {
        houseTable.addBlankRowToTable(houseNames.length);
    }
}

function childNameEntered() {
    let button = document.getElementById('nameEntered');
    let childName = document.getElementById('name').value
    button.disabled  = true;
    let house = sortingHat.allocateChildToRandomHouse(childName);
    houseTable.updateCell(childName, house.houseNumber, house.children.length);
    let audioHelper = new AudioHelper('audio/');
    audioHelper.playRandomSoundForHouse(house.name, () =>{
        button.disabled = false;
    });
}