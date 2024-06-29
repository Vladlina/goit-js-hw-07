const categories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${categories.length}`);
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("li");
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
