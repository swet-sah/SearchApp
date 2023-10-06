const express = require('express');
const app = express();

app.use(express.json());

// let books = [
//   { id: 1, title: 'Book 1' },
//   { id: 2, title: 'Book 2' }
// ];

// // Get all books
// app.get('/api/books', (req, res) => {
//   res.json(books);
// });

// // Get a specific book
// app.get('/api/books/:id', (req, res) => {
//   const book = books.find(b => b.id === parseInt(req.params.id));
//   if (!book) return res.status(404).send('Book not found.');
//   res.json(book);
// });

// // Add a new book
// app.post('/api/books', (req, res) => {
//   const book = {
//     id: books.length + 1,
//     title: req.body.title
//   };
//   books.push(book);
//   res.json(book);
// });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
