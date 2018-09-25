var GildedRose = function () {
  var items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality(items);
};

const normal = (item) => {
  item.sellIn -= 1;

  if (item.sellIn < 0) {
    item.quality = (item.quality - 2) || 0;
  } else {
    item.quality = (item.quality - 1) || 0;
  }
};

const sulfuras = (item) => {};

const agedBrie = (item) => {
  item.sellIn -= 1;

  if (item.sellIn < 0) { item.quality = 0; }
  else if (item.sellIn <= 5) { item.quality += 3; }
  else if (item.sellIn <= 10) { item.quality += 2; }
  else { item.quality += 1; }

  if (item.quality > 50) { item.quality = 50; }
};

GildedRose.updateQuality = function (items) {
  items.forEach((item) => {
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      sulfuras(item);
    } else if (item.name === "Aged Brie" || item.name === "Backstage passes to a TAFKAL80ETC concert") {
      agedBrie(item);
    } else {
      normal(item); 
    }
  });

  return items;
};
