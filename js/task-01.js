const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");

const categoryCount = items.length;
console.log(`Number of categories: ${categoryCount}`);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li");
  const elementCount = categoryElements.length;
    
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementCount}`);
  });