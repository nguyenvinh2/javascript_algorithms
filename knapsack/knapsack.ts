'uses strict';

class Item {
  name: string;
  weight: number;
  value: number;
  constructor(nameBuild: string, weightBuild: number, valueBuild: number) {
    this.name = nameBuild;
    this.weight = weightBuild;
    this.value = valueBuild;
  }
}

let itemList = [new Item('shovel', 2, 5), new Item('hoe',3,7), new Item('hammer',1,3), new Item('cement',10,8), new Item('brick',4,2), new Item('rake', 2, 5), new Item('spade',1,3), new Item('thatch',2,2), new Item('pick', 5,6), new Item('digger', 4, 8)];

console.log(itemList);

