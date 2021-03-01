class SortingHat {
    constructor(houseNames, totalAllowedInHouse) {
        this.houses = [];

        houseNames.forEach((item, index) => {
            this.houses.push(new House(item, totalAllowedInHouse, index));
        });
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