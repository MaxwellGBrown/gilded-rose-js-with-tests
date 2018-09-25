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

  return item
};

const sulfuras = (item) => {
  return item;
};

const agedBrie = (item) => {
  item.sellIn -= 1;

  if (item.sellIn < 0) { item.quality = 0; }
  else if (item.sellIn <= 5) { item.quality += 3; }
  else if (item.sellIn <= 10) { item.quality += 2; }
  else { item.quality += 1; }

  if (item.quality > 50) { item.quality = 50; }

  return item;
};

GildedRose.updateQuality = function (items) {
  for (var i = 0; i < items.length; i++) {

    if (items[i].name === "Sulfuras, Hand of Ragnaros") {
      items[i] = sulfuras(items[i]);
      continue;
    } else if (items[i].name === "Aged Brie" || items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
      items[i] = agedBrie(items[i]);
      continue;
    } else {
      items[i] = normal(items[i]); 
      continue;
    }
  }
  return items;
};
