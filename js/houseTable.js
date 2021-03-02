class HouseTable{
    constructor(tableElement){
        this.tableElement = tableElement;
    }

    addTheadRow(houseNames) {
        let header = this.tableElement.createTHead();
        let newRow = header.insertRow(0);

        houseNames.forEach((item, index) => {
            let cell = newRow.insertCell(index);
            cell.innerHTML = item;
        });
    }

    addBlankRowToTable(numberOrColumns) {
        let newRow = this.tableElement.insertRow(table.length);

        for (let j = 0; j < numberOrColumns; j++) {
            let cell = newRow.insertCell(j);
            cell.innerHTML = "";
        }
    }

    updateCell(value, i, j) {
        let row = this.tableElement.rows[j];
        let cell = row.cells[i];
        cell.innerHTML = value;
    }
}