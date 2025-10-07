javascript: (() => {
  // Create a new <div> element
  for (let i = 0; i <100; i++) {
  const newDiv = document.createElement("div");
  // Add content and styling
  newDiv.textContent = "This is a dynamically added div!";
  newDiv.style.color = "blue";
  // Append the new element to an existing container
  document.body.appendChild(newDiv);
  }
})();
