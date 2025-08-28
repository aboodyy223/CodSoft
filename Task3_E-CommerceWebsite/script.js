document.querySelectorAll(".product-card .btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // prevents link jump
    alert("Product added to cart!");
  });
});