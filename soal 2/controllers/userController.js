const db = require('../config/db');

// CREATE USER (POST)
exports.createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email)
        return res.status(400).json({ message: "Name dan Email wajib diisi" });

    const checkEmail = `SELECT * FROM users WHERE email = ?`;
    db.query(checkEmail, [email], (err, results) => {
        if (results.length > 0)
            return res.status(400).json({ message: "Email sudah terdaftar" });

        const query = `INSERT INTO users (name, email) VALUES (?, ?)`;
        db.query(query, [name, email], (err, result) => {
            if (err) throw err;

            res.status(201).json({
                message: "User berhasil ditambahkan",
                userId: result.insertId
            });
        });
    });
};

// GET ALL USERS
exports.getUsers = (req, res) => {
    const query = `SELECT * FROM users`;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// GET USER BY ID
exports.getUserById = (req, res) => {
    const query = `SELECT * FROM users WHERE id = ?`;
    db.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        if (results.length === 0)
            return res.status(404).json({ message: "User tidak ditemukan" });

        res.json(results[0]);
    });
};

// DELETE USER
exports.deleteUser = (req, res) => {
    const query = `DELETE FROM users WHERE id = ?`;
    db.query(query, [req.params.id], (err, result) => {
        if (err) throw err;

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "User tidak ditemukan" });

        res.json({ message: "User berhasil dihapus" });
    });
};
