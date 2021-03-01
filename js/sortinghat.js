class SortingHat {
    constructor(houseNames, totalAllowedInHouse) {
        this.houses = [];
        let count = 0;

        for(let houseName in houseNames) {
            this.houses.push(new House(houseName, totalAllowedInHouse, count));
            count++
        }
    }

    allocateChildToRandomHouse(name){
        let child = new Child(name);
        let house = this.getRandomNotFullHouse();
        house.addChild(child);
        return house;
    }

    getRandomNotFullHouse(){
        let house;
        do {
            let houseNumber = Math.floor(Math.random() * 4);
            house = this.houses[houseNumber];
        }
        while (house.isHouseFull())

        return house;
    }
   
}