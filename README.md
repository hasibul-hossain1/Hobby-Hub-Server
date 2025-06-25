# 🎯 HobbyHub Backend

This is the **backend API** for **HobbyHub**, a platform that helps users discover, create, and manage local hobby groups. Built with **Node.js**, **Express**, and **MongoDB**, this backend provides RESTful API endpoints to manage group data.

---

## 🚀 Live Server

Base URL: http://localhost:3030/


---

## 📁 Features

- ✅ Create new hobby groups  
- ✅ Retrieve all hobby groups  
- ✅ Retrieve a specific group by ID  
- ✅ Update a group (email verification required)  
- ✅ Delete a group  

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB (using MongoDB Atlas)
- Dotenv for environment variables
- CORS
- Colors (for console output formatting)

---

## 🧪 API Endpoints

| Method | Endpoint         | Description                        | Auth Required |
|--------|------------------|------------------------------------|---------------|
| GET    | `/`              | Root route, returns "Hello World" | ❌ No         |
| GET    | `/groups`        | Get all groups                     | ❌ No         |
| GET    | `/groups/:id`    | Get a single group by ID           | ❌ No         |
| POST   | `/groups`        | Create a new group                 | ❌ No         |
| PUT    | `/groups/:id`    | Update group (requires email)      | ✅ Yes (body) |
| DELETE | `/groups/:id`    | Delete a group by ID               | ❌ No         |

---

## 📂 Sample Requests

### ➕ POST `/groups`

```
{
  "name": "Chess Club",
  "email": "user@example.com",
  "description": "A group for chess lovers.",
  "location": "Jashore",
  "members": 10
}


✏️ PUT /groups/:id

```
{
  "email": "user@example.com",
  "name": "Updated Chess Club",
  "description": "For advanced chess players"
}
```

⚙️ Environment Variables
Create a .env file in the root directory with the following keys:
```
PORT=3030
NAME=your_mongodb_username
PASS=your_mongodb_password

```
These variables are used to securely connect to your MongoDB Atlas cluster.


📦 Project Dependencies

{
  "colors": "^1.4.0",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "mongodb": "^6.16.0"
}

Install using:
```
pnpm install

```


🛠 How to Run
Clone the Repository
```
git clone https://github.com/yourusername/hobbyhub-backend.git
cd hobbyhub-backend
```

Install Dependencies:
```
pnpm install

```
Create .env file

```
PORT=3030
NAME=your_mongodb_username
PASS=your_mongodb_password

```

Start the Server
```
node index.js
```