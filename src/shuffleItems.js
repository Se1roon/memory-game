function changeIndexes(array) {
  // This function modifies the original array,
  //  so it have to be used on copy of the state version.cards.

  const randomIndex = Math.round((Math.random() * 100) % array.length) || 2;
  const deletedItems = array.splice(0, randomIndex);
  const middle = Math.floor(array.length / 2);
  array.splice(middle, 0, ...deletedItems);
}

export default changeIndexes;
