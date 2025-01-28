const calculatePrice = (items) =>
  items.reduce((initial, item) => initial + (+item.price || 0), 2);

export default calculatePrice;
