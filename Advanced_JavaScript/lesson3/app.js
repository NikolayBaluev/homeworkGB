document
  .querySelector(".review-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.querySelector(".product-name").value.trim();
    const feedbackText = document.querySelector(".review-text").value.trim();

    if (productName && feedbackText) {
      // отзывы из LocalStorage
      let reviews = JSON.parse(localStorage.getItem("reviews")) || {};

      // уже существует?  добавляем новый
      if (!reviews[productName]) {
        reviews[productName] = [];
      }
      reviews[productName].push(feedbackText);

      // Сохраняем в LocalStorage
      localStorage.setItem("reviews", JSON.stringify(reviews));

      // Jчистить форму
      document.querySelector(".product-name").value = "";
      document.querySelector(".review-text").value = "";

      alert("Отзыв добавлен!");
    }
  });
