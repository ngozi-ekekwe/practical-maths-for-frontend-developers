export const roll = (minValue, maxValue, floatFlag) => {
  let r = Math.random() * (maxValue - minValue) + minValue;
  return floatFlag ? r : Math.floor(r);
};

export const possibleProducts = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥥",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶",
  "🥒",
  "🥬",
  "🥦",
];

export const possibleProductNames = [
  'Apple',
  'Mango',
  'Egg Plant',
  'Orange',
  'Coconut',
  'Carrot',
  'Tomatoe',
  'Corn',
  'Water Melon',
  'Pear',
  'Pepper'
]
