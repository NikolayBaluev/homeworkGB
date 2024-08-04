document.addEventListener("DOMContentLoaded", function () {
  const feedback = JSON.parse(localStorage.getItem("reviews")) || {}; // если getItem вернул null, то оператор || вернёт {}
  const productList = document.querySelector(".product-list");
  const feedbackDetails = document.querySelector(".review-details");
  const feedbackList = document.querySelector(".review-list");
  const productTitle = document.querySelector(".product-title");

  function productListGenerate() {
    productList.innerHTML = "";
    for (const product in feedback) {
      const li = document.createElement("li");
      li.textContent = product;
      li.style.cursor = "pointer";
      li.addEventListener("click", function () {
        showFeedback(product);
      });
      productList.appendChild(li);
    }
  }

  function showFeedback(product) {
    productTitle.textContent = product;
    feedbackList.innerHTML = "";
    feedback[product].forEach((review, index) => {
      const li = document.createElement("li");
      li.textContent = review;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", function () {
        removeFeedback(product, index);
      });
      li.appendChild(deleteButton);
      feedbackList.appendChild(li);
    });
    productList.style.display = "none";
    feedbackDetails.style.display = "block";
  }

  function removeFeedback(product, index) {
    feedback[product].splice(index, 1);
    if (feedback[product].length === 0) {
      delete feedback[product];
    }
    localStorage.setItem("reviews", JSON.stringify(feedback));
    showFeedback(product);
  }

  document.querySelector(".go-back").addEventListener("click", function () {
    feedbackDetails.style.display = "none";
    productList.style.display = "block";
    productListGenerate();
  });

  productListGenerate();
});
