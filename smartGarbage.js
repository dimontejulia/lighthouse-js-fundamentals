const smartGarbage = function (trash, bins) {
  bins[trash] += 1;
  return bins;
};
console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage("waste", { waste: 2, recycling: 2, compost: 2 }));