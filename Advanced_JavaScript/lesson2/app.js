/*Задание 1 */

class Library {
  #books;

  constructor(initialBooks = []) {
    this.#books = [...initialBooks];
  }

  get allBooks() {
    return [...this.#books];
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(
        `Книга с названием "${title}" уже присутствует в библиотеке`
      );
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(
        `Книга с названием "${title}" в библиотеке не существует`
      );
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

/*Использоватение */
const myLibrary = new Library(["1984", "To Kill a Mockingbird"]);
console.log(myLibrary.allBooks);

myLibrary.addBook("Brave New World");
console.log(myLibrary.allBooks);

myLibrary.removeBook("1984");
console.log(myLibrary.allBooks);

console.log(myLibrary.hasBook("Brave New World"));
console.log(myLibrary.hasBook("1984"));

/* Задание 2 */

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function displayInitialData() {
  const reviewsContainer = document.querySelector(".reviewsContainer");
  initialData.forEach((product) => {
    const productTitle = document.createElement("h3");
    productTitle.textContent = product.product;
    reviewsContainer.appendChild(productTitle);

    product.reviews.forEach((review) => {
      const reviewText = document.createElement("p");
      reviewText.textContent = review.text;
      reviewsContainer.appendChild(reviewText);
    });
  });
}

function addReview(reviewText) {
  if (reviewText.length < 50 || reviewText.length > 500) {
    throw new Error("Длина отзыва должна быть от 50 до 500 символов");
  }

  const reviewsContainer = document.querySelector(".reviewsContainer");
  const newReview = document.createElement("p");
  newReview.textContent = reviewText;
  reviewsContainer.appendChild(newReview);
}

const submitReviewEl = document.querySelector(".submitReview");

submitReviewEl.addEventListener("click", () => {
  const reviewText = document.querySelector(".reviewText").value;
  addReview(reviewText);
  document.querySelector(".reviewText").value = "";
});
