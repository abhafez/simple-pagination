export function dataGeneration(page) {
  let numberOfItems = 76;
  let itemsPerPage = 7;
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
    data.elements.push(`Item Number ${i}`);
  }
  return data;
}
