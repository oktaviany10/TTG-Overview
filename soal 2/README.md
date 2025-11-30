# REST API Node.js + Express + MySQL (Port 3307)

Project ini adalah implementasi REST API sederhana menggunakan: -
Node.js - Express.js - MySQL (XAMPP / Laragon) dengan port **3307** -
Thunder Client / Postman untuk testing API

------------------------------------------------------------------------

## ⚙️ Instalasi Project

### 1️⃣ Clone repository

``` bash
git clone https://github.com/username/nama-project.git
cd nama-project
```

### 2️⃣ Install dependency

``` bash
npm install
```

------------------------------------------------------------------------

## 🗄️ Setup Database MySQL

### 3️⃣ Buat database

Masuk ke phpMyAdmin → SQL:

``` sql
CREATE DATABASE testdb;
```

### 4️⃣ Buat tabel users

``` sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

------------------------------------------------------------------------

## 🔐 Setup File `.env`

Buat file `.env` di root project:

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=testdb
    DB_PORT=3307
    PORT=3000

------------------------------------------------------------------------

## 🔌 Setup File `config/db.js`

Pastikan sudah memakai port **3307**:

``` js
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3307
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected on port 3307");
});

module.exports = db;
```

------------------------------------------------------------------------

## ▶️ Menjalankan Server

Jalankan API:

``` bash
node app.js
```

Output sukses:

    MySQL Connected on port 3307
    Server running on port 3000

------------------------------------------------------------------------

# 🚀 Testing API via Thunder Client / Postman

------------------------------------------------------------------------

## 📌 GET --- Ambil semua user

    GET http://localhost:3000/api/users

------------------------------------------------------------------------

## 📌 GET --- Ambil user berdasarkan ID

    GET http://localhost:3000/api/users/1

------------------------------------------------------------------------

## 📌 POST --- Tambah user

    POST http://localhost:3000/api/users

Body JSON:

``` json
{
  "name": "Phainon",
  "email": "phainon@example.com"
}
```

------------------------------------------------------------------------

## 📌 DELETE --- Hapus user

    DELETE http://localhost:3000/api/users/1

------------------------------------------------------------------------

# 🎯 Catatan

-   Server menggunakan port **3000**
-   Database MySQL menggunakan port **3307**
-   Gunakan Thunder Client VS Code untuk pengujian API
