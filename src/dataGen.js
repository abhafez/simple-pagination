export function dataGeneration(page) {
  console.log("first ", page);
  let numberOfItems = 10; // NOTE: change here to test
  let itemsPerPage = 2; // NOTE: change here to test
  let pageNumber, startingItem, endingItem;

  try {
    pageNumber = Number(page);
  } catch (e) {
    throw Error("Something Wrong Happened");
  }

  if (Number(page) > 0) {
    startingItem = pageNumber * itemsPerPage;
    console.log("starting item ", startingItem);
    endingItem = (pageNumber + 1) * itemsPerPage - 1;
    console.log("ending item ", endingItem);
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
      console.log("push");
      data.elements.push(`Item Number ${i}`);
    }
  }
  console.log("data ", data);
  return data;
}
