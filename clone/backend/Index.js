const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();


const loginPool = mysql2.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Avdaar79",
    database: "login"
});

const signinPool = mysql2.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Avdaar79",
    database: "signin"
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello, this is the backend" });
});

// Login 
app.get("/login", (req, res) => {
    const q = "SELECT * FROM users";
    loginPool.query(q, (err, data) => {
        if (err) return res.status(500).json({ error: "Internal server error" });
        return res.json(data);
    });
});

app.post("/login", (req, res) => {
    const q = "INSERT INTO users (`Email`, `Password`) VALUES (?, ?)";
    const values = [req.body.email, req.body.password];
    loginPool.query(q, values, (err, data) => {
        if (err) return res.status(500).json({ error: "Internal server error" });
        return res.json({ message: "User has been created successfully." });
    });
});

// Signin 
app.get("/signin", (req, res) => {
    const s = "SELECT * FROM users";
    signinPool.query(s, (err, data) => {
        if (err) return res.status(500).json({ error: "Internal server error" });
        return res.json(data);
    });
});

app.post("/signin", (req, res) => {
    const selectQuery = "SELECT * FROM users WHERE Email = ?";
    const insertQuery = "INSERT INTO users (`Email`, `Username`, `Password`) VALUES (?, ?, ?)";
    const values = [req.body.email, req.body.username, req.body.password];

    signinPool.query(selectQuery, [req.body.email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }

        if (result.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        } else {
            signinPool.query(insertQuery, values, (err, data) => {
                if (err) {
                    return res.status(500).json({ error: "Internal server error" });
                }
                return res.json({ message: "User has been created successfully." });
            });
        }
    });
});

app.listen(9000, () => {
    console.log("🟩🟩🟩🟩 Server is online on port 9000 🟩🟩🟩🟩");
});
