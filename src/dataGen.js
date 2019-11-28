export function dataGeneration(page) {
  let numberOfItems = 6; // NOTE: change here to test
  let itemsPerPage = 7; // NOTE: change here to test
  let pageNumber, startingItem, endingItem;

  try {
    pageNumber = Number(page);
  } catch (e) {
    throw Error("Something Wrong Happened");
  }

  if (Number(page) > 0) {
    startingItem = pageNumber * itemsPerPage;
    endingItem = (pageNumber + 1) * itemsPerPage - 1;
  } else {
    startingItem = 0;
    endingItem = itemsPerPage - 1;
  }
  let data = {
    numberOfItems,
    itemsPerPage,
    pageNumber,
    elements: []
  };
  for (let i = startingItem + 1; i <= endingItem + 1; i++) {
    if (numberOfItems >= i) {
      data.elements.push(`Item Number ${i}`);
    }
  }
  return data;
}
