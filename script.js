let books = [];

// Add book
function addBook() {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;
  let year = document.getElementById("year").value;

  if (name === "" || author === "" || year === "") {
    alert("Please fill all fields");
    return;
  }

  books.push({ name, author, year });

  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("year").value = "";

  displayBooks(books);
}

// Display books
function displayBooks(list) {
  let table = document.getElementById("bookTable");
  table.innerHTML = "";

  list.forEach((book, index) => {
    table.innerHTML += `
      <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>
          <button class="delete-btn" onclick="deleteBook(${index})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

// Delete book
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

// Search book
function searchBook() {
  let text = document.getElementById("searchBook").value.toLowerCase();
  let filtered = books.filter(book =>
    book.name.toLowerCase().includes(text)
  );
  displayBooks(filtered);
}

// Fine & details search (demo)
function searchFine() {
  alert("Fine & Details search clicked");
}

// Send issue / complaint
function sendIssue() {
  let issue = document.getElementById("issueDetails").value;

  if (issue === "") {
    alert("Please write details");
    return;
  }

  alert("Issue / Complaint Sent Successfully");
  document.getElementById("issueDetails").value = "";
}
