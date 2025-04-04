const express = require('express');
const app = express();
const port = 3003; // Using 3003 to avoid conflicts

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (CSS, JS)

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { message: null });
});

app.post('/submit', (req, res) => {
    const { username, email, password } = req.body;
    const message = `Submitted: Username - ${username}, Email - ${email}`;
    res.render('index', { message });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});