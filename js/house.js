class House {
    constructor(name, totalAllowedInHouse, houseNumber) {
        this.name = name;
        this.children = [];
        this.totalAllowedInHouse = totalAllowedInHouse;
        this.houseNumber = houseNumber;
    }

    addChild(child) {
        this.children.push(child);
    }

    isHouseFull() {
        return this.children.length == this.totalAllowedInHouse;
    }
}